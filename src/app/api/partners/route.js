import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Client with secret service role key to bypass RLS safely within an API Route
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://acveeqocusqvhwnuszid.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
  try {
    const { data: partners, error } = await supabase
      .from('partners')
      .select('*')
      .order('createdAt', { ascending: false });
      
    if (error) throw error;
    
    return NextResponse.json({ success: true, data: partners || [] });
  } catch (error) {
    console.error('Supabase GET partners error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

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
        createdAt: new Date().toISOString()
      }])
      .select();

    if (error) throw error;
    
    return NextResponse.json({ success: true, message: 'Partnership request submitted successfully', data });
  } catch (error) {
    console.error('Supabase POST partners error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
