import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

export const Navbar = () => {
  return (
    <div className="flex space-x-[74px]  justify-center pt-[30px] pb-[19px] z-10">
   
      <div>
        <img
          className="w-[35px] h-[35px]"
          src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png"
        />
      </div>


      <div className="hidden md:flex space-x-6 items-center">
    
        <div className="group relative">
          <button className="text-[14px] text-gray-800 font-semibold hover:text-pink-600 font-customFont">
            MEN
          </button>
          <div className=" absolute  left-0 hidden group-hover:block bg-white shadow-lg w-[923px] z-10">
            <div className="grid grid-cols-5 gap-[30px] p-6 ">
              <div className="flex flex-col ">
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Top Wear
                  </h3>
                  <ul className="gap-[4px]">
                    <li>
                      <a className="text-sm font-normal " href="#">
                        T-Shirts
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Casual Shirts
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Formal Shirts
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Sweatshirts
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Sweaters
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Blazers & Coats
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Suits
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Rain Jackets
                      </a>
                    </li>
                  </ul>
                  <hr className="h-px my-[12px] bg-gray-200 border-0"></hr>
                </div>

                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Indian & Festive Wear
                  </h3>
                  <ul className="gap-[4px]">
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Kurtas & Kurta Sets
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Sherwanis
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Nehru Jackets
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Dhotis
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Bottomwear
                  </h3>
                  <ul className="gap-[4px]">
                    <li>
                      <a className="text-sm font-normal " href="#">
                        Jeans
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Casual Trousers
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Formal Trousers
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Shorts
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Track Pants & Joggers
                      </a>
                    </li>
                  </ul>
                  <hr className="h-px my-[12px] bg-gray-200 border-0"></hr>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Innerwear & Sleepwear
                  </h3>
                  <ul className="gap-[4px]">
                    <li>
                      <a className="text-sm font-normal " href="#">
                        Briefs & Trunks
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Boxers
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Vests
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Sleepwear & Loungewear
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Thermals
                      </a>
                    </li>
                  </ul>
                  <hr className="h-px my-[12px] bg-gray-200 border-0"></hr>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Plus Size
                  </h3>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Footwear
                  </h3>
                  <ul className="gap-[4px]">
                    <li>
                      <a className="text-sm font-normal " href="#">
                        Casual Shoes
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Sports Shoes
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Formal Shoes
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Sneakers
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Sandals & Floaters
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Flip Flops
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Socks
                      </a>
                    </li>
                  </ul>
                  <hr className="h-px my-[12px] bg-gray-200 border-0"></hr>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Personal Care & Grooming
                  </h3>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Sunglasses & Frames
                  </h3>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Watches
                  </h3>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Sports & Active Wear
                  </h3>
                  <ul className="gap-[4px]">
                    <li>
                      <a className="text-sm font-normal " href="#">
                        Sports Shoes
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Sports Sandals
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Active T-Shirts
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Track Pants & Shorts
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Tracksuits
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Jackets & Sweatshirts
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Sports Accessories
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Swimwear
                      </a>
                    </li>
                  </ul>
                  <hr className="h-px my-[12px] bg-gray-200 border-0"></hr>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Gadgets
                  </h3>
                  <ul className="gap-[4px]">
                    <li>
                      <a className="text-sm font-normal " href="#">
                        Smart Wearables
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Fitness Gadgets
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Headphones
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Speakers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Fashion Accessories
                  </h3>
                  <ul className="gap-[4px]">
                    <li>
                      <a className="text-sm font-normal " href="#">
                        Wallets
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Belts
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Perfumes & Body Mists
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Trimmers
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Deodorants
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Ties, Cufflinks & Pocket Squares
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Accessory Gift Sets
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Caps & Hats
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Mufflers, Scarves & Gloves
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Phone Cases
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Rings & Wristwear
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Helmets
                      </a>
                    </li>
                  </ul>
                  <hr className="h-px my-[12px] bg-gray-200 border-0"></hr>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Bags & Backpacks
                  </h3>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Luggages & Trolleys
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative">
          <button className="text-[14px] text-gray-800 font-semibold hover:text-pink-600 font-customFont">
            WOMEN
          </button>
          <div className=" absolute  left-0 hidden group-hover:block bg-white shadow-lg w-[923px] z-10">
            <div className="grid grid-cols-5 gap-[30px] p-6 ">
              <div className="flex flex-col ">
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Indian & Fusion Wear
                  </h3>
                  <ul className="gap-[4px]">
                    <li>
                      <a className="text-sm font-normal " href="#">
                        Kurtas & Suits
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Kurtis, Tunics & Tops
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Sarees
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Ethnic Wear
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Leggings, Salwars & Churidars
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Skirts & Palazzos
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Lehenga Cholis
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Dupattas & Shawls
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Jackets
                      </a>
                    </li>
                  </ul>
                  <hr className="h-px my-[12px] bg-gray-200 border-0"></hr>
                </div>

                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Belts, Scarves & More
                  </h3>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Watches & Wearables
                  </h3>
                </div>
              </div>

              <div className="flex flex-col ">
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Western Wear
                  </h3>
                  <ul className="gap-[4px]">
                    <li>
                      <a className="text-sm font-normal " href="#">
                        Dresses
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Tops
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Tshirts
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Jeans
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Trousers & Capris
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Shorts & Skirts
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Co-ords
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Playsuits
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Jumpsuits
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Shrugs
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Sweaters & Sweatshirts
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Jackets & Coats
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Blazers & Waistcoats
                      </a>
                    </li>
                  </ul>
                  <hr className="h-px my-[12px] bg-gray-200 border-0"></hr>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Plus Size
                  </h3>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Maternity
                  </h3>
                  {/* <hr className="h-px my-[12px] bg-gray-200 border-0"></hr> */}
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Sunglasses & Frames
                  </h3>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Footwear
                  </h3>

                  <ul className="gap-[4px]">
                    <li>
                      <a className="text-sm font-normal " href="#">
                        Flats
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Casual Shoes
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Heels
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Boots
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                        Sports Shoes & Floaters
                      </a>
                    </li>
                  </ul>

                  <hr className="h-px my-[12px] bg-gray-200 border-0"></hr>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                    Sports & Active Wear
                  </h3>
                    <ul className="gap-[4px]">
                      <li>
                        <a className="text-sm font-normal " href="#">
                          Clothing
                        </a>
                      </li>
                      <li>
                        <a className="text-sm font-normal" href="#">
                          Footwear
                        </a>
                      </li>
                      <li>
                        <a className="text-sm font-normal" href="#">
                          Sports Accessories
                        </a>
                      </li>
                      <li>
                        <a className="text-sm font-normal" href="#">
                          Sports Equipment
                        </a>
                      </li>
                    </ul>
                
                </div>
              </div>

              

              <div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                  Lingerie & Sleepwear
                  </h3>
                  <ul className="gap-[4px]">
                    <li>
                      <a className="text-sm font-normal " href="#">
                      Bra
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                      Briefs
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                      Shapewear
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                      Sleepwear & Loungewear
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                      Swimwear
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                      Camisoles & Thermals
                      </a>
                    </li>
                  </ul>
                  <hr className="h-px my-[12px] bg-gray-200 border-0"></hr>
                </div>

                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                  Beauty & Personal Care
                  </h3>
                  <ul className="gap-[4px]">
                    <li>
                      <a className="text-sm font-normal " href="#">
                      Makeup
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                      Skincare
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                      Premium Beauty
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                      Lipsticks
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                      Fragrances
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

 
              <div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                  Gadgets
                  </h3>
                  <ul className="gap-[4px]">
                    <li>
                      <a className="text-sm font-normal " href="#">
              Smart Wearables
                        
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                      Fitness Gadgets
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                      Headphones
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                      Speakers
                      </a>
                    </li>
                  </ul>
                  <hr className="h-px my-[12px] bg-gray-200 border-0"></hr>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                  Jewellery
                  </h3>

                  <ul className="gap-[4px]">
                    <li>
                      <a className="text-sm font-normal " href="#">
              Smart Wearables
                        
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                      Fashion Jewellery
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                      Fine Jewellery
                      </a>
                    </li>
                    <li>
                      <a className="text-sm font-normal" href="#">
                      Earrings
                      </a>
                    </li>
                  </ul>
                  <hr className="h-px my-[12px] bg-gray-200 border-0"></hr>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                  Backpacks
                  </h3>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                  Handbags, Bags & Wallets
                  </h3>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-pink-600 font-bold mb-[2px text-sm">
                  Luggages & Trolleys
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="group relative">
          <button className="text-gray-700 font-semibold hover:text-pink-600">
            Home & Living
          </button>
        </div>

      
        <div className="group relative">
          <button className="text-gray-700 font-semibold hover:text-pink-600">
            Beauty
          </button>
        </div>
      </div>
      
      <div className="flex items-center  gap-[10px] bg-gray-400 w-[542px] rounded h-[29px]">
        <div><CiSearch /></div>
        <div>search here</div>
      </div>
      <div className="flex space-x-3">
        <div className="flex gap-[8px] items-center">
          <div>
            <CgProfile />
          </div>
          Profile
        </div>
        <div className="flex gap-[8px] items-center">
          <div>
            <CiHeart />
          </div>
          Wishlist
        </div>
        <div className="flex gap-[8px] items-center">
          <div>
            <IoBagOutline />
          </div>
          Bag
        </div>
      </div>
    </div>
  );
};

export default Navbar
