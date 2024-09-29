import React from "react";
import { IoArrowBack, IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const MassUpload = () => {
  const datas = [
    {
      no: 1,
      companyCode: "001",
      documentType: "Invoice",
      documentDate: "22-09-2021",
      postingDate: "23-09-2021",
      docHeaderText: "Invoice for office supplies",
      reference: "REF123",
      glAcctAssets: "1000",
      dc: "D",
      vendor: "Vendor A",
      taxCode: "T01",
      amountDocCurr: "10,000,000",
      baseAmount: "9,500,000",
      costCenter: "CC001",
      profitCenter: "PC001",
      businessArea: "BA001",
      paytTerm: "PT30",
      baseLineDate: "22-10-2021",
    },
  ];

  return (
    <div className="p-5 bg-[#A7A5A3]  w-full h-[100vh]">
      <Link to={"/invoice"} className="flex gap-2 items-center">
        <IoArrowBack size={30} />{" "}
        <p className="text-2xl font-bold uppercase ">Mass Upload</p>
      </Link>
      <div className="flex gap-2 items-center my-3">
        <button className="bg-black text-white rounded uppercase py-1 px-2 text-xs">
          Export Excel
        </button>
      </div>
      <div className="overflow-x-auto mt-2">
        <table className="min-w-full bg-[#FFAF10] rounded-2xl shadow-lg">
          <thead>
            <tr className="text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">No</th>
              <th className="py-3 px-6 text-left">Company Code</th>
              <th className="py-3 px-6 text-left">Document Type</th>
              <th className="py-3 px-6 text-left">Document Date</th>
              <th className="py-3 px-6 text-left">Posting Date</th>
              <th className="py-3 px-6 text-left">Doc.Header Text</th>
              <th className="py-3 px-6 text-left">Reference</th>
              <th className="py-3 px-6 text-left">G/L Acct / Assets</th>
              <th className="py-3 px-6 text-left">D/C</th>
              <th className="py-3 px-6 text-left">Vendor</th>
              <th className="py-3 px-6 text-left">Tax Code</th>
              <th className="py-3 px-6 text-left">Amount in Doc.Curr.</th>
              <th className="py-3 px-6 text-left">Base Amount</th>
              <th className="py-3 px-6 text-left">Costcenter</th>
              <th className="py-3 px-6 text-left">Profit Center</th>
              <th className="py-3 px-6 text-left">Business Area</th>
              <th className="py-3 px-6 text-left">Payt Term</th>
              <th className="py-3 px-6 text-left">Base Line Date</th>
              <th className="py-3 px-6 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {datas.map((item, index) => (
              <tr
                key={index}
                // className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{item.no}</td>
                <td className="py-3 px-6 text-left">{item.companyCode}</td>
                <td className="py-3 px-6 text-left">{item.documentType}</td>
                <td className="py-3 px-6 text-left">{item.documentDate}</td>
                <td className="py-3 px-6 text-left">{item.postingDate}</td>
                <td className="py-3 px-6 text-left">{item.docHeaderText}</td>
                <td className="py-3 px-6 text-left">{item.reference}</td>
                <td className="py-3 px-6 text-left">{item.glAcctAssets}</td>
                <td className="py-3 px-6 text-left">{item.dc}</td>
                <td className="py-3 px-6 text-left">{item.vendor}</td>
                <td className="py-3 px-6 text-left">{item.taxCode}</td>
                <td className="py-3 px-6 text-left">{item.amountDocCurr}</td>
                <td className="py-3 px-6 text-left">{item.baseAmount}</td>
                <td className="py-3 px-6 text-left">{item.costCenter}</td>
                <td className="py-3 px-6 text-left">{item.profitCenter}</td>
                <td className="py-3 px-6 text-left">{item.businessArea}</td>
                <td className="py-3 px-6 text-left">{item.paytTerm}</td>
                <td className="py-3 px-6 text-left">{item.baseLineDate}</td>
                <td className="py-3 px-6 text-center flex justify-center">
                  <button className="detail" title="Lihat">
                    <IoEyeSharp color="white" width={20} />
                  </button>
                  <button className="delete" title="Hapus">
                    <MdDelete color="white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MassUpload;
