import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Client with service role key (bypasses RLS safely — server-side only)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// GET — fetch all partner requests
export async function GET() {
  try {
    const { data: partners, error } = await supabase
      .from('partners')
      .select('*')
      .order('createdAt', { ascending: false });

    if (error) throw error;
    return NextResponse.json({ success: true, data: partners || [] });
  } catch (error) {
    console.error('Partners GET error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST — submit a new partner request
export async function POST(request) {
  try {
    const newPartner = await request.json();

    const { data, error } = await supabase
      .from('partners')
      .insert([{
        firstName: newPartner.first_name,
        lastName: newPartner.last_name,
        email: newPartner.email,
        phone: newPartner.phone,
        organization: newPartner.organization,
        country: newPartner.country,
        partnershipType: newPartner.partnership_type,
        experience: newPartner.experience,
        expectedStudents: newPartner.expected_students,
        message: newPartner.message,
        status: 'New',
        createdAt: new Date().toISOString(),
      }])
      .select();

    if (error) throw error;
    return NextResponse.json({ success: true, message: 'Partnership request submitted successfully', data });
  } catch (error) {
    console.error('Partners POST error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

// PATCH — update status of a partner (?id=xxx)
export async function PATCH(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ success: false, error: 'Missing id' }, { status: 400 });

    const body = await request.json();
    const { status } = body;
    if (!status) return NextResponse.json({ success: false, error: 'Missing status' }, { status: 400 });

    const { data, error } = await supabase
      .from('partners')
      .update({ status })
      .eq('id', id)
      .select();

    if (error) throw error;
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Partners PATCH error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE — remove a partner request (?id=xxx)
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ success: false, error: 'Missing id' }, { status: 400 });

    const { error } = await supabase
      .from('partners')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return NextResponse.json({ success: true, message: 'Partner request deleted' });
  } catch (error) {
    console.error('Partners DELETE error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
