import { CardLinkProps } from "../types";
import Image from "next/image";

export const CardLink: React.FC<CardLinkProps> = ({ Title, Description, Image: ImgSrc, Url }) => {
  return (
    <div className="card bg-base-100 image-full w-96 h-64 shadow-xl dark:bg-gray-800">
      <figure>
        <Image src={ImgSrc} alt={Title} width={384} height={256} className="object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title dark:text-gray-100 ">{Title}</h2>
        <p className="dark:text-gray-100 ">{Description}</p>
        <div className="card-actions justify-end">
          <a href={Url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};
