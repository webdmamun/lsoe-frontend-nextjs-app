import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Client with service role key (bypasses RLS safely — server-side only)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// GET — fetch all referrals
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

// POST — submit a new referral
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
        status: 'Pending',
      }])
      .select();

    if (error) throw error;
    return NextResponse.json({ success: true, message: 'Referral submitted successfully', data });
  } catch (error) {
    console.error('Referrals POST error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

// PATCH — update status of a referral (?id=xxx)
export async function PATCH(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ success: false, error: 'Missing id' }, { status: 400 });

    const body = await request.json();
    const { status } = body;
    if (!status) return NextResponse.json({ success: false, error: 'Missing status' }, { status: 400 });

    const { data, error } = await supabase
      .from('referrals')
      .update({ status })
      .eq('id', id)
      .select();

    if (error) throw error;
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Referrals PATCH error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE — remove a referral (?id=xxx)
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ success: false, error: 'Missing id' }, { status: 400 });

    const { error } = await supabase
      .from('referrals')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return NextResponse.json({ success: true, message: 'Referral deleted' });
  } catch (error) {
    console.error('Referrals DELETE error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
