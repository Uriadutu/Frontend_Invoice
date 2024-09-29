import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Invoice = () => {
  const datas = [
    {
      no: 1,
      tglInvoiceGAHR: "21-10-2021",
      tglInvoiceFinance: "22-10-2021",
      idVendor: "V001",
      namaVendor: "PT. Vendor Sukses",
      tglInvoice: "20-10-2021",
      nomorInvoice: "INV-001",
      po: "PO-12345",
      totalInvoice: "10,000,000",
      ppn: "1,000,000",
      lainnya: "500,000",
      totalDenganPPN: "11,500,000",
      vat23: "300,000",
      totalBayarVendor: "11,200,000",
      faktorPajak: "Faktor 1",
      departemen: "Keuangan",
      idDepartemen: "D001",
      jenisPengiriman: "Ekspres",
      gl: "GL-001",
      deskripsi: "Pembelian peralatan kantor",
    },
  ];

  return (
    <div className="p-5 bg-[#A7A5A3] w-full h-[100vh]">
      <Link to={"/"} className="flex gap-2 items-center">
        <IoArrowBack size={30} />{" "}
        <p className="text-2xl font-bold uppercase ">Invoice</p>
      </Link>
      <div className="flex gap-2 items-center my-3">
        <button className="bg-black text-white rounded uppercase py-1 px-2 text-xs">
          Export Excel
        </button>
        <Link to={"/massupload"} className="bg-black text-white rounded uppercase py-1 px-2 text-xs">
          Mass Upload
        </Link>
      </div>
      <div className="overflow-x-auto scroll-hidden mt-2 bg-[#FFAF10] rounded-2xl">
        {" "}
        <table className="min-w-full shadow-lg">
          <thead>
            <tr className=" text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">No</th>
              <th className="py-3 px-6 text-left">Tanggal Invoice (GA/HR)</th>
              <th className="py-3 px-6 text-left">Tanggal Invoice (Finance)</th>
              <th className="py-3 px-6 text-left">Id Vendor</th>
              <th className="py-3 px-6 text-left">Nama Vendor</th>
              <th className="py-3 px-6 text-left">Tanggal Invoice</th>
              <th className="py-3 px-6 text-left">Nomor Invoice</th>
              <th className="py-3 px-6 text-left">PO</th>
              <th className="py-3 px-6 text-left">Total Invoice</th>
              <th className="py-3 px-6 text-left">PPN</th>
              <th className="py-3 px-6 text-left">Lainnya</th>
              <th className="py-3 px-6 text-left">Total dengan PPN</th>
              <th className="py-3 px-6 text-left">VAT 23</th>
              <th className="py-3 px-6 text-left">Total Bayar ke Vendor</th>
              <th className="py-3 px-6 text-left">Faktor Pajak</th>
              <th className="py-3 px-6 text-left">Departemen</th>
              <th className="py-3 px-6 text-left">Id Departemen</th>
              <th className="py-3 px-6 text-left">Jenis Pengiriman</th>
              <th className="py-3 px-6 text-left">GL</th>
              <th className="py-3 px-6 text-left">Deskripsi</th>
              <th className="py-3 px-6 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {datas.map((item, index) => (
              <tr
                key={index}
                // className="border-b border-gray-200"
              >
                <td className="py-3 px-6 text-left">{item.no}</td>
                <td className="py-3 px-6 text-left">{item.tglInvoiceGAHR}</td>
                <td className="py-3 px-6 text-left">
                  {item.tglInvoiceFinance}
                </td>
                <td className="py-3 px-6 text-left">{item.idVendor}</td>
                <td className="py-3 px-6 text-left">{item.namaVendor}</td>
                <td className="py-3 px-6 text-left">{item.tglInvoice}</td>
                <td className="py-3 px-6 text-left">{item.nomorInvoice}</td>
                <td className="py-3 px-6 text-left">{item.po}</td>
                <td className="py-3 px-6 text-left">{item.totalInvoice}</td>
                <td className="py-3 px-6 text-left">{item.ppn}</td>
                <td className="py-3 px-6 text-left">{item.lainnya}</td>
                <td className="py-3 px-6 text-left">{item.totalDenganPPN}</td>
                <td className="py-3 px-6 text-left">{item.vat23}</td>
                <td className="py-3 px-6 text-left">{item.totalBayarVendor}</td>
                <td className="py-3 px-6 text-left">{item.faktorPajak}</td>
                <td className="py-3 px-6 text-left">{item.departemen}</td>
                <td className="py-3 px-6 text-left">{item.idDepartemen}</td>
                <td className="py-3 px-6 text-left">{item.jenisPengiriman}</td>
                <td className="py-3 px-6 text-left">{item.gl}</td>
                <td className="py-3 px-6 text-left">{item.deskripsi}</td>
                <td className="py-3 px-6 text-center flex justify-center">
                  <button className="" title="Hapus">
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

export default Invoice;
