import Image from "next/image";
import { MdPeopleAlt } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { FaGasPump } from "react-icons/fa6";

type CardUnitProps = {
  imageUrl: string;
  unitName: string;
  price: number;
  description: string;
};

const CardUnit: React.FC<CardUnitProps> = ({ imageUrl, unitName, price, description }) => {
  const formattedPrice = price ? price.toLocaleString("id-ID") : "Harga Tidak Tersedia";

  const whatsappMessage = `Halo, saya tertarik untuk bertanya lebih lanjut atau memesan jasa untuk unit *${unitName}*. Apakah tersedia dan dapat dilayani? Terima kasih.`;

  const whatsappUrl = `https://wa.me/628562711149?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="card bg-base-100 w-96 shadow-xl p-3">
      <figure className="p-2">
        <Image src={imageUrl} alt={unitName} width={800} height={600} objectFit="cover" />
      </figure>
      <div className="card-body p-4">
        <h1 className="card-title text-xl font-bold mb-2">{unitName}</h1>
        {/* Feature box */}
        <div className="flex justify-evenly px-5">
          {/* Icon 1 */}
          <div className="mb-2 flex flex-col items-center">
            <div className="text-xl text-gray-700 border border-gray-300 rounded-lg p-2 inline-flex items-center justify-center">
              <IoTimeOutline />
            </div>
            <p className="text-sm text-gray-700 mt-1">12 Jam</p>
          </div>
          {/* Icon 2 */}
          <div className="mb-2 flex flex-col items-center">
            <div className="text-xl text-gray-700 border border-gray-300 rounded-lg p-2 inline-flex items-center justify-center">
              <MdPeopleAlt />
            </div>
            <p className="text-sm text-gray-700 mt-1">Driver</p>
          </div>
          {/* Icon 3 */}
          <div className="mb-2 flex flex-col items-center">
            <div className="text-xl text-gray-700 border border-gray-300 rounded-lg p-2 inline-flex items-center justify-center">
              <FaGasPump />
            </div>
            <p className="text-sm text-gray-700 mt-1">Full</p>
          </div>
        </div>
        <p className="text-sm text-gray-700 mb-5">{description}</p>
        <div className="card-actions flex justify-between items-center">
          <h2 className="text-lg text-gray-700 mb-4 font-bold">Rp. {formattedPrice}</h2>
          <a
            href={whatsappUrl}
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security feature
            className="btn btn-outline btn-success"
          >
            Sewa Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardUnit;
