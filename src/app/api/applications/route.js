import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Client with service role key (bypasses RLS safely — server-side only)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// GET — fetch all applications
export async function GET() {
  try {
    const { data: applications, error } = await supabase
      .from('applications')
      .select('*')
      .order('createdAt', { ascending: false });

    if (error) throw error;
    return NextResponse.json({ success: true, data: applications || [] });
  } catch (error) {
    console.error('Applications GET error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST — submit a new application
export async function POST(request) {
  try {
    const newApplication = await request.json();

    const { data, error } = await supabase
      .from('applications')
      .insert([{
        origin: newApplication.origin,
        firstName: newApplication.firstName,
        lastName: newApplication.lastName,
        email: newApplication.email,
        phone: newApplication.phone,
        nationality: newApplication.nationality,
        englishLevel: newApplication.englishLevel,
        liveInEngland: newApplication.liveInEngland,
        studyLocation: newApplication.studyLocation,
        residencyStatus: newApplication.residencyStatus,
        callDate: newApplication.callDate,
        country: newApplication.country,
        city: newApplication.city,
        interestedSubject: newApplication.interestedSubject,
        status: 'New',
      }])
      .select();

    if (error) throw error;
    return NextResponse.json({ success: true, message: 'Application submitted successfully', data });
  } catch (error) {
    console.error('Applications POST error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

// PATCH — update status of an application (?id=xxx)
export async function PATCH(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ success: false, error: 'Missing id' }, { status: 400 });

    const body = await request.json();
    const { status } = body;
    if (!status) return NextResponse.json({ success: false, error: 'Missing status' }, { status: 400 });

    const { data, error } = await supabase
      .from('applications')
      .update({ status })
      .eq('id', id)
      .select();

    if (error) throw error;
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Applications PATCH error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE — remove an application (?id=xxx)
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ success: false, error: 'Missing id' }, { status: 400 });

    const { error } = await supabase
      .from('applications')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return NextResponse.json({ success: true, message: 'Application deleted' });
  } catch (error) {
    console.error('Applications DELETE error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
