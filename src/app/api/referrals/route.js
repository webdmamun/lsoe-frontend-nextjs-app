import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://acveeqocusqvhwnuszid.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
  try {
    const { data: referrals, error } = await supabase
      .from('referrals')
      .select('*')
      .order('createdAt', { ascending: false });
      
    if (error) throw error;
    
    return NextResponse.json({ success: true, data: referrals || [] });
  } catch (error) {
    console.error('Referrals GET error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const referralData = await request.json();
    
    const { data, error } = await supabase
      .from('referrals')
      .insert([{
        referrerFirstName: referralData.referrerFirstName,
        referrerLastName: referralData.referrerLastName,
        referrerEmail: referralData.referrerEmail,
        referrerPhone: referralData.referrerPhone,
        studentFirstName: referralData.studentFirstName,
        studentLastName: referralData.studentLastName,
        studentEmail: referralData.studentEmail,
        studentPhone: referralData.studentPhone,
        studyDestination: referralData.studyDestination,
        studyLevel: referralData.studyLevel,
        relationship: referralData.relationship,
        additionalInfo: referralData.additionalInfo,
        status: 'Pending'
      }])
      .select();

    if (error) throw error;
    
    return NextResponse.json({ success: true, message: 'Referral submitted successfully', data });
  } catch (error) {
    console.error('Referrals POST error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
