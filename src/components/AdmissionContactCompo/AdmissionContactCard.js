import React from "react";
import { ImLocation2 } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";

const contactData = [
  {
    country: "UK",
    office: "LSOE LONDON OFFICE",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    address: "5 Station Parade, Hornchurch, Elm Park, London, RM12 5AB",
    facebook: "https://www.facebook.com/Londonschoolofexcellence/",
    contact: "N Haque",
  },
  {
    country: "UK",
    office: "LSOE LEEDS OFFICE",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    address: "5th - 18th Floors, 67 Albion Street Pinnacle, Leeds, LS1 5AA",
    facebook: "https://www.facebook.com/Londonschoolofexcellence/",
    contact: "Ms. David Joshep",
  },
  {
    country: "UK",
    office: "LSOE Birmingham OFFICE",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    address: "588 Warwick Road Tyseley, Birmingham, B11 2HR",
    facebook: "https://www.facebook.com/Londonschoolofexcellence/",
    contact: "Mr. A Tanim",
  },
  {
    country: "Bangladesh",
    office: "LSOE BANGLADESH",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
    address: "70, Point View Shopping Centre (1st Floor) Amborkhana, Sylhet",
    facebook: "https://www.facebook.com/LSOE.BD",
    contact: "Mr. Tahmid Hasan",
  },
  {
    country: "Nigeria",
    office: "LSOE NIGERIA",
    flag: "https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg",
    address: "Bankole street, Magodo, Lagos, Nigeria",
    facebook: "https://www.facebook.com/LondonschoolofexcellenceNG/",
    contact: "KASHIMAWO Olalekan",
  },
  {
    country: "Sri Lanka",
    office: "LSOE Sri Lanka",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg",
    address:
      "214/1, Opposite the Temple , Puwakpitiya, Galewela , Matale District, Sri lanka",
    facebook: "https://facebook.com/Londonschoolofexcellence/",
    contact: "M Rifthy",
  },
  {
    country: "Tunisia",
    office: "LSOE TUNISIA",
    flag: "https://cdn.britannica.com/41/3041-004-F1D6DEFC/Flag-Tunisia.jpg",
    address: "28 rue Mohaled Mhiri, Naser 1, 2037 Ariana",
    facebook: "https://www.facebook.com/lsoetn",
    contact: "Mr. Ghassen Jabali",
  },
  {
    country: "Ghana",
    office: "LSOE GHANA",
    flag: "https://cdn.britannica.com/54/5054-004-A09ABCDF/Flag-Ghana.jpg",
    address: "GA – 204 – 3830, Achimota – Abofu, Accra",
    facebook: "https://www.facebook.com/profile.php?id=100063681425768",
    contact: "Mr. Washington Cobi",
  },
  {
    country: "Guinea",
    office: "LSOE GUINEA",
    flag: "https://cdn.britannica.com/56/5056-004-0E251CE7/Flag-Guinea.jpg",
    address: "Immeuble Barry et fils, route le prince, Bambeto, Conakry",
    facebook: "https://www.facebook.com/Londonschoolofexcellence/",
    contact: "Miss. Jalloh Saliu Jan",
  },
];

const AdmissionContactCard = () => {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-blue-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactData.map((office, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl shadow-md p-6 transition transform hover:scale-[1.03] hover:shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={office.flag}
                alt={office.country}
                className="w-8 h-5 object-cover rounded-sm"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {office.office}
              </h3>
            </div>

            <p className="text-sm text-gray-600 mb-2">
              <ImLocation2 className="inline mr-1 text-blue-600" />
              <strong className="font-medium">Address:</strong> {office.address}
            </p>

            <p className="text-sm text-gray-600 mb-2">
              <BsFacebook className="inline mr-1 text-blue-600" />
              <a
                href={office.facebook}
                className="hover:underline text-blue-700"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </p>

            <p className="text-sm text-gray-600">
              <MdContactPhone className="inline mr-1 text-blue-600" />
              <strong className="font-medium">Contact Person:</strong>{" "}
              {office.contact}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdmissionContactCard;
