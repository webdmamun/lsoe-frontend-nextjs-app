#!/usr/bin/env python3
"""
Script to generate all remaining Next.js pages from CRA structure
"""

pages_config = [
    # About pages
    {
        "route": "about-us",
        "title": "About Us - LSOE",
        "description": "Learn about London Source of Education - Your gateway to UK education and employment opportunities.",
        "components": ["AdmissionNav", "AboutBanner", "AdmAboutDeails", "MissionVision", "OurGoal", "WhyRenowned", "OurPartners", "AboutGallary", "PartnerWithUs", "AdmissionFooter"],
        "imports": [
            ("AdmissionNav", "@/components/shared/header/AdmissionNav"),
            ("AboutBanner", "@/components/AdmissionAboutCompo/AboutBanner"),
            ("AdmAboutDeails", "@/components/AdmissionAboutCompo/AdmAboutDetails"),
            ("MissionVision", "@/components/AdmissionAboutCompo/MissionVision"),
            ("OurGoal", "@/components/AdmissionAboutCompo/OurGoal"),
            ("WhyRenowned", "@/components/AdmissionAboutCompo/WhyRenowned"),
            ("OurPartners", "@/components/AdmissionAboutCompo/OurPartners"),
            ("AboutGallary", "@/components/AdmissionAboutCompo/AboutGallary"),
            ("PartnerWithUs", "@/components/AdmissionAboutCompo/PartnerWithUs"),
            ("AdmissionFooter", "@/components/shared/Footer/AdmissionFooter"),
        ]
    },
    {
        "route": "about-employment-hub",
        "title": "About Employment Hub - LSOE",
        "description": "Discover LSOE Employment Hub - Your partner for career opportunities and employment services in the UK.",
        "components": ["EmploymentNav", "EmploymentAboutBanner", "EmAboutDetails", "MissionVissionEmpHub", "EmploymentFooter"],
        "imports": [
            ("EmploymentNav", "@/components/shared/header/EmploymentNav"),
            ("EmploymentAboutBanner", "@/components/EmploymentAboutCompo/EmploymentAboutBanner"),
            ("EmAboutDetails", "@/components/EmploymentAboutCompo/EmAboutDetails"),
            ("MissionVissionEmpHub", "@/components/EmploymentAboutCompo/MissionVissionEmpHub"),
            ("EmploymentFooter", "@/components/shared/Footer/EmploymentFooter"),
        ]
    },
    # Student Services
    {
        "route": "student-visa-advice",
        "title": "Student Visa Advice - LSOE",
        "description": "Get expert student visa advice for studying in the UK. Comprehensive guidance for international students.",
        "components": ["AdmissionNav", "SVABanner", "SVACompo", "AdmissionFooter"],
        "imports": [
            ("AdmissionNav", "@/components/shared/header/AdmissionNav"),
            ("SVABanner", "@/components/StudentVisaAdviceCompo/SVABanner"),
            ("SVACompo", "@/components/StudentVisaAdviceCompo/SVACompo"),
            ("AdmissionFooter", "@/components/shared/Footer/AdmissionFooter"),
        ]
    },
    {
        "route": "student-accommodation",
        "title": "Student Accommodation - LSOE",
        "description": "Find suitable student accommodation in the UK. We help international students secure comfortable housing.",
        "components": ["AdmissionNav", "StAcoBanner", "DetailsStudentsAcco", "AdmissionFooter"],
        "imports": [
            ("AdmissionNav", "@/components/shared/header/AdmissionNav"),
            ("StAcoBanner", "@/components/StudentAccommodationCompo/StAcoBanner"),
            ("DetailsStudentsAcco", "@/components/StudentAccommodationCompo/DetailsStudentsAcco"),
            ("AdmissionFooter", "@/components/shared/Footer/AdmissionFooter"),
        ]
    },
    {
        "route": "student-financial-information",
        "title": "Student Financial Information - LSOE",
        "description": "Financial guidance for international students studying in the UK. Learn about funding, scholarships, and financial requirements.",
        "components": ["AdmissionNav", "CoverSFI", "CollapseSFI", "UKVIBankBlogLinksSFI", "BlockquoteSFI", "AdmissionFooter"],
        "imports": [
            ("AdmissionNav", "@/components/shared/header/AdmissionNav"),
            ("CoverSFI", "@/components/StudentFinancialInformationCompo/CoverSFI"),
            ("CollapseSFI", "@/components/StudentFinancialInformationCompo/CollapseSFI"),
            ("UKVIBankBlogLinksSFI", "@/components/StudentFinancialInformationCompo/UKVIBankBlogLinksSFI"),
            ("BlockquoteSFI", "@/components/StudentFinancialInformationCompo/BlockquoteSFI"),
            ("AdmissionFooter", "@/components/shared/Footer/AdmissionFooter"),
        ]
    },
    {
        "route": "aqf-guide",
        "title": "AQF Guide - LSOE",
        "description": "Australian Qualifications Framework guide for international students.",
        "components": ["AdmissionNav", "AqfGuideBanner", "AqfGuideDetails", "AdmissionFooter"],
        "imports": [
            ("AdmissionNav", "@/components/shared/header/AdmissionNav"),
            ("AqfGuideBanner", "@/components/AqfGuideCompo/AqfGuideBanner"),
            ("AqfGuideDetails", "@/components/AqfGuideCompo/AqfGuideDetails"),
            ("AdmissionFooter", "@/components/shared/Footer/AdmissionFooter"),
        ]
    },
    # Employment
    {
        "route": "employment",
        "title": "Employment Services - LSOE",
        "description": "Explore employment opportunities in the UK with LSOE Employment Hub.",
        "components": ["EmploymentNav", "EmpoyementHubBanner", "EmploymentABT", "WhyChoiceEmploymentHub", "TrendingJobsCompo", "SupportEMP", "EmploymentFooter"],
        "imports": [
            ("EmploymentNav", "@/components/shared/header/EmploymentNav"),
            ("EmpoyementHubBanner", "@/components/EmpoyementHubCompo/EmpoyementHubBanner"),
            ("EmploymentABT", "@/components/EmpoyementHubCompo/EmploymentABT"),
            ("WhyChoiceEmploymentHub", "@/components/EmpoyementHubCompo/WhyChoiceEmploymentHub"),
            ("TrendingJobsCompo", "@/components/EmpoyementHubCompo/TrendingJobsCompo"),
            ("SupportEMP", "@/components/EmpoyementHubCompo/SupportEMP"),
            ("EmploymentFooter", "@/components/shared/Footer/EmploymentFooter"),
        ]
    },
    {
        "route": "find-a-job",
        "title": "Find a Job - LSOE",
        "description": "Search and apply for jobs in the UK. Browse opportunities across various sectors.",
        "components": ["EmploymentNav", "FindAJobBanner", "FindAJobForm", "EmploymentFooter"],
        "imports": [
            ("EmploymentNav", "@/components/shared/header/EmploymentNav"),
            ("FindAJobBanner", "@/components/FindAJob/FindAJobBanner"),
            ("FindAJobForm", "@/components/FindAJob/FindAJobForm"),
            ("EmploymentFooter", "@/components/shared/Footer/EmploymentFooter"),
        ]
    },
    {
        "route": "find-a-talent",
        "title": "Find Talent - LSOE",
        "description": "Recruit talented professionals for your organization. Post jobs and find qualified candidates.",
        "components": ["EmploymentNav", "FindATalentBanner", "FindATalentForm", "EmploymentFooter"],
        "imports": [
            ("EmploymentNav", "@/components/shared/header/EmploymentNav"),
            ("FindATalentBanner", "@/components/FindATalentCompo/FindATalentBanner"),
            ("FindATalentForm", "@/components/FindATalentCompo/FindATalentForm"),
            ("EmploymentFooter", "@/components/shared/Footer/EmploymentFooter"),
        ]
    },
    {
        "route": "career-hub",
        "title": "Career Hub - LSOE",
        "description": "Career development resources, guidance, and opportunities for professionals.",
        "components": ["GlobalNav", "CareerHubCompoBanner", "CertificateCourses", "WhyBookAppointment", "CalendlyBooking", "SuccessStories", "GlobalFooter"],
        "imports": [
            ("GlobalNav", "@/components/shared/header/GlobalNav"),
            ("CareerHubCompoBanner", "@/components/CareerHubCompo/CareerHubCompoBanner"),
            ("CertificateCourses", "@/components/CareerHubCompo/CertificateCourses"),
            ("WhyBookAppointment", "@/components/CareerHubCompo/WhyBookAppointment"),
            ("CalendlyBooking", "@/components/CareerHubCompo/CalendlyBooking"),
            ("SuccessStories", "@/components/CareerHubCompo/SuccessStories"),
            ("GlobalFooter", "@/components/shared/Footer/GlobalFooter"),
        ]
    },
    {
        "route": "recruitment-process",
        "title": "Recruitment Process - LSOE",
        "description": "Learn about our recruitment process and how we match talent with opportunities.",
        "components": ["EmploymentNav", "RecruitmentProcessBanner", "RecruitmentProcessDetails", "EmploymentFooter"],
        "imports": [
            ("EmploymentNav", "@/components/shared/header/EmploymentNav"),
            ("RecruitmentProcessBanner", "@/components/RecruitmentProcessCompo/RecruitmentProcessBanner"),
            ("RecruitmentProcessDetails", "@/components/RecruitmentProcessCompo/RecruitmentProcessDetails"),
            ("EmploymentFooter", "@/components/shared/Footer/EmploymentFooter"),
        ]
    },
    {
        "route": "services-we-provide",
        "title": "Services We Provide - LSOE",
        "description": "Comprehensive overview of all services provided by London Source of Education.",
        "components": ["AdmissionNav", "ServicesWeProvideBanner", "ServiceWeProvideDetails", "AdmissionFooter"],
        "imports": [
            ("AdmissionNav", "@/components/shared/header/AdmissionNav"),
            ("ServicesWeProvideBanner", "@/components/ServicesWeProvideCompo/ServicesWeProvideBanner"),
            ("ServiceWeProvideDetails", "@/components/ServicesWeProvideCompo/ServiceWeProvideDetails"),
            ("AdmissionFooter", "@/components/shared/Footer/AdmissionFooter"),
        ]
    },
    # Applications
    {
        "route": "apply-now-international",
        "title": "Apply Now - International Students - LSOE",
        "description": "Apply for university admission as an international student. Start your UK education journey.",
        "components": ["AdmissionNav", "IntFormEmbedHub", "AdmissionFooter"],
        "imports": [
            ("AdmissionNav", "@/components/shared/header/AdmissionNav"),
            ("IntFormEmbedHub", "@/components/ApplyNowLeadCompo/IntCompo/IntFormEmbedHub"),
            ("AdmissionFooter", "@/components/shared/Footer/AdmissionFooter"),
        ]
    },
    {
        "route": "apply-now-uk-eu",
        "title": "Apply Now - UK/EU Students - LSOE",
        "description": "Apply for university admission as a UK or EU student.",
        "components": ["AdmissionNav", "UKEUFormEmbedHub", "AdmissionFooter"],
        "imports": [
            ("AdmissionNav", "@/components/shared/header/AdmissionNav"),
            ("UKEUFormEmbedHub", "@/components/ApplyNowLeadCompo/UKEUCompo/UKEUFormEmbedHub"),
            ("AdmissionFooter", "@/components/shared/Footer/AdmissionFooter"),
        ]
    },
    {
        "route": "book-appointment",
        "title": "Book Appointment - LSOE",
        "description": "Book a consultation appointment with our education and career advisors.",
        "components": ["AdmissionNav", "BookAppointmentHero", "AppointmentTypesCompo", "AppointmentFAQ", "AdmissionFooter"],
        "imports": [
            ("AdmissionNav", "@/components/shared/header/AdmissionNav"),
            ("BookAppointmentHero", "@/components/BookAppoinmentCompo/BookAppointmentHero"),
            ("AppointmentTypesCompo", "@/components/BookAppoinmentCompo/AppointmentTypesCompo"),
            ("AppointmentFAQ", "@/components/BookAppoinmentCompo/AppointmentFAQ"),
            ("AdmissionFooter", "@/components/shared/Footer/AdmissionFooter"),
        ]
    },
    # Legal
    {
        "route": "privacy-policy",
        "title": "Privacy Policy - LSOE",
        "description": "Read our privacy policy and learn how we protect your personal information.",
        "components": ["AdmissionNav", "PrivacyPolicyBanner", "PrivacyPolicyDetails", "AdmissionFooter"],
        "imports": [
            ("AdmissionNav", "@/components/shared/header/AdmissionNav"),
            ("PrivacyPolicyBanner", "@/components/PrivacyPpolicyCompo/PrivacyPolicyBanner"),
            ("PrivacyPolicyDetails", "@/components/PrivacyPpolicyCompo/PrivacyPolicyDetails"),
            ("AdmissionFooter", "@/components/shared/Footer/AdmissionFooter"),
        ]
    },
    {
        "route": "modern-slavery-policy",
        "title": "Modern Slavery Policy - LSOE",
        "description": "Our commitment to preventing modern slavery and human trafficking.",
        "components": ["AdmissionNav", "ModernSlaveryPolicyBanner", "SlaveryPolicy", "AdmissionFooter"],
        "imports": [
            ("AdmissionNav", "@/components/shared/header/AdmissionNav"),
            ("ModernSlaveryPolicyBanner", "@/components/ModernSlaveryPolicyCompo.js/ModernSlaveryPolicyBanner"),
            ("SlaveryPolicy", "@/components/PrivacyPpolicyCompo/SlaveryPolicy"),
            ("AdmissionFooter", "@/components/shared/Footer/AdmissionFooter"),
        ]
    },
]

def generate_page(config):
    route = config["route"]
    title = config["title"]
    description = config["description"]
    components = config["components"]
    imports = config["imports"]
    
    # Generate imports
    imports_str = "\n".join([f"import {name} from '{path}';" for name, path in imports])
    
    # Generate component list
    components_str = "\n      ".join([f"<{comp} />" for comp in components])
    
    # Generate page name
    page_name = "".join([word.capitalize() for word in route.split("-")]) + "Page"
    
    content = f"""{imports_str}

export const metadata = {{
  title: '{title}',
  description: '{description}',
}};

export default function {page_name}() {{
  return (
    <>
      {components_str}
    </>
  );
}}
"""
    
    filename = f"src/app/{route}/page.js"
    with open(filename, "w") as f:
        f.write(content)
    print(f"✅ Created {filename}")

if __name__ == "__main__":
    print("🚀 Generating all remaining pages...")
    for config in pages_config:
        try:
            generate_page(config)
        except Exception as e:
            print(f"❌ Error generating {config['route']}: {e}")
    print("✅ All pages generated!")
