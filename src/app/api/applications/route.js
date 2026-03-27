import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Client with secret service role key to bypass RLS safely within an API Route
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://acveeqocusqvhwnuszid.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
  try {
    const { data: applications, error } = await supabase
      .from('applications')
      .select('*')
      .order('createdAt', { ascending: false });
      
    if (error) throw error;
    
    return NextResponse.json({ success: true, data: applications || [] });
  } catch (error) {
    console.error('Supabase GET error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

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
        status: 'New'
      }])
      .select();

    if (error) throw error;
    
    return NextResponse.json({ success: true, message: 'Application submitted successfully', data });
  } catch (error) {
    console.error('Supabase POST error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
