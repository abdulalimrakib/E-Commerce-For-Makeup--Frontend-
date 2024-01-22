import { TfiFacebook } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";


const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto grid grid-cols-6 py-10">
        <div>
          <a className="text-3xl font-krona text-yellow" href="/">
            Beauty
          </a>
        </div>
        <div className="col-span-5 grid grid-cols-9 font-krona">
          <div className="col-span-2">
            <h3>about</h3>
            <ul className="font-ubuntu mt-5 flex flex-col gap-2">
              <li><a href="/about-beauty">About Beauty</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/stands-social-impact">Stands Social Impact</a></li>
              <li><a href="/affiliates">Affiliates</a></li>
              <li><a href="/syply-chain-transparency">Syply Chain Transparency</a></li>
              <li><a href="/sitemap">Sitemap</a></li>
              <li><a href="/global-ites">Global Sites</a></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3>skincare</h3>
            <ul className="font-ubuntu mt-5 flex flex-col gap-2">
              <li><a href="/about-beauty">Makeup</a></li>
              <li><a href="/careers">Skincare</a></li>
              <li><a href="/stands-social-impact">Fragrance</a></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3>makeup</h3>
            <ul className="font-ubuntu mt-5 flex flex-col gap-2">
              <li><a href="/about-beauty">Makeup</a></li>
              <li><a href="/careers">Skincare</a></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3>contact</h3>
            <div className="font-ubuntu mt-5 flex flex-col gap-2">
              <p>Beauty</p>
              <p>ul. Kowalewska 2a</p>
              <p>00-193 warszawa</p>
              <p><span>Tel: </span>+48 ### ### ###</p>
              <p><span>Fex: </span>+48 ### ### ###</p>
              <p><span>E-mail: </span>info@beauty.com</p>
            </div>
          </div>
          <div className="flex flex-col justify-around text-2xl text-yellow">
            <a href="/"><TfiFacebook /></a>
            <a href="/"><FaTwitter /></a>
            <a href="/"><RiInstagramFill /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer