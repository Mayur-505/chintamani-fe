import { FC, useEffect, useState } from "react";
import K1 from "../../public/assests/Images/k1.png";
import { Button } from "./ui/button";
import useApi from "@/hooks/useApi";
import { apiPath } from "@/lib/api-path";
import { productType } from "@/lib/interfaces/category";

const NewArrivals: FC = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const { apiAction } = useApi();

  useEffect(() => {
    getLatestProduct();
  }, []);

  const getLatestProduct = async () => {
    const data = await apiAction({ method: "get", url: `${apiPath?.categories?.product}?sort=3` });
    setLatestProducts(data?.data?.product);
  };

  const product = [{
    "id": "898b9185-f325-4984-a166-51087376fd9f",
    "title": "Customized Diamonds/Jewellerys CARAT 2",
    "maintitle": "1 Carat Marquise Cut  dfgvfdg CARAT 2",
    "price": "950",
    "disccount_price": "875",
    "shape": "Marquise MQ",
    "carat": "1",
    "colour": "[*] Fancy Deep Brownish Greenish Yellow",
    "clarity": "SI1",
    "cut": "",
    "polish": "VG",
    "symmetry": "GD",
    "flourescence": "N",
    "measurements": "",
    "cert_number": "2367656028",
    "table": "64",
    "crown_height": "",
    "pavilian_depth": "",
    "depth": "0.96 UP",
    "crown_angle": "",
    "pavilian_angle": "",
    "disccount_percentage": "7.894736842105263",
    "productimage": [
      "https://GemsBucket.s3.us-east-005.backblazeb2.com/product/uploads/productimage-1705300575234.png",
      "https://GemsBucket.s3.us-east-005.backblazeb2.com/product/uploads/productimage-1705300575235.png"
    ],
    "status": 0,
    "diamond_size": {
      "size": "",
      "size_desc": "A diamond's size is described in millimeters (mm). These measurements are roughly comparable to carats. A 1-carat round diamond is typically 6.5 mm, while a 1.25-carat round diamond is 6.8 mm. For square-cut diamonds like princess, cushion, and asscher, 1-carat is typically 5.5 mm and a 1.25 carat is 6 mm.",
      "sizeimages": "https://GemsBucket.s3.us-east-005.backblazeb2.com/size/uploads/sizeimages-1705300575220.png"
    },
    "diamond_color": {
      "color_desc": "Diamond color is all about what you can’t see. Diamonds are valued by how closely they approach colorlessness – the less color, the higher their value. (The exception to this is fancy color diamonds, such as pinks and blues, which lie outside this color range.) Most diamonds found in jewelry stores run from colorless to near-colorless, with slight hints of yellow or brown.",
      "colorimage": "https://GemsBucket.s3.us-east-005.backblazeb2.com/color/uploads/colorimage-1705300575227.png"
    },
    "diamond_clarity": {
      "clarity_desc": "The GIA Clarity Scale contains 11 grades, with most diamonds falling into the VS (very slightly included) or SI (slightly included) categories. In determining a clarity grade, the GIA system considers the size, nature, position, color or relief, and quantity of clarity characteristics visible under 10× magnification.",
      "clarityimage": "https://GemsBucket.s3.us-east-005.backblazeb2.com/clarity/uploads/clarityimage-1705300575230.png"
    },
    "diamond_cut": {
      "cut_desc": "The GIA Cut Grading System applies to the most popular cutting style – the standard round brilliant – and all clarities across the D-to-Z color range. There are five cut grades: Excellent (EX), Very Good (VG), Good (G), Fair (F) and Poor (P). A diamond with an Excellent cut grade is very bright.14-Jan-2016",
      "cutimage": "https://GemsBucket.s3.us-east-005.backblazeb2.com/cut/uploads/cutimage-1705300575232.png"
    },
    "createdAt": "2024-01-15T01:06:34.134Z",
    "updatedAt": "2024-01-15T01:06:34.134Z",
    "subcategoryid": null,
    "categoryid": {
      "id": "ef7088d3-b930-45c5-872d-8d69924ab0aa",
      "name": "Diamond",
      "description": "Diamond",
      "image": null,
      "status": 0,
      "createdAt": "2024-01-14T23:27:35.002Z",
      "updatedAt": "2024-01-14T23:27:35.002Z"
    },
    "innercategoryid": null
  }, {
    "id": "898b9185-f325-4984-a166-51087376fd9f",
    "title": "Customized Diamonds/Jewellerys CARAT 2",
    "maintitle": "1 Carat Marquise Cut  dfgvfdg CARAT 2",
    "price": "950",
    "disccount_price": "875",
    "shape": "Marquise MQ",
    "carat": "1",
    "colour": "[*] Fancy Deep Brownish Greenish Yellow",
    "clarity": "SI1",
    "cut": "",
    "polish": "VG",
    "symmetry": "GD",
    "flourescence": "N",
    "measurements": "",
    "cert_number": "2367656028",
    "table": "64",
    "crown_height": "",
    "pavilian_depth": "",
    "depth": "0.96 UP",
    "crown_angle": "",
    "pavilian_angle": "",
    "disccount_percentage": "7.894736842105263",
    "productimage": [
      "https://GemsBucket.s3.us-east-005.backblazeb2.com/product/uploads/productimage-1705300575234.png",
      "https://GemsBucket.s3.us-east-005.backblazeb2.com/product/uploads/productimage-1705300575235.png"
    ],
    "status": 0,
    "diamond_size": {
      "size": "",
      "size_desc": "A diamond's size is described in millimeters (mm). These measurements are roughly comparable to carats. A 1-carat round diamond is typically 6.5 mm, while a 1.25-carat round diamond is 6.8 mm. For square-cut diamonds like princess, cushion, and asscher, 1-carat is typically 5.5 mm and a 1.25 carat is 6 mm.",
      "sizeimages": "https://GemsBucket.s3.us-east-005.backblazeb2.com/size/uploads/sizeimages-1705300575220.png"
    },
    "diamond_color": {
      "color_desc": "Diamond color is all about what you can’t see. Diamonds are valued by how closely they approach colorlessness – the less color, the higher their value. (The exception to this is fancy color diamonds, such as pinks and blues, which lie outside this color range.) Most diamonds found in jewelry stores run from colorless to near-colorless, with slight hints of yellow or brown.",
      "colorimage": "https://GemsBucket.s3.us-east-005.backblazeb2.com/color/uploads/colorimage-1705300575227.png"
    },
    "diamond_clarity": {
      "clarity_desc": "The GIA Clarity Scale contains 11 grades, with most diamonds falling into the VS (very slightly included) or SI (slightly included) categories. In determining a clarity grade, the GIA system considers the size, nature, position, color or relief, and quantity of clarity characteristics visible under 10× magnification.",
      "clarityimage": "https://GemsBucket.s3.us-east-005.backblazeb2.com/clarity/uploads/clarityimage-1705300575230.png"
    },
    "diamond_cut": {
      "cut_desc": "The GIA Cut Grading System applies to the most popular cutting style – the standard round brilliant – and all clarities across the D-to-Z color range. There are five cut grades: Excellent (EX), Very Good (VG), Good (G), Fair (F) and Poor (P). A diamond with an Excellent cut grade is very bright.14-Jan-2016",
      "cutimage": "https://GemsBucket.s3.us-east-005.backblazeb2.com/cut/uploads/cutimage-1705300575232.png"
    },
    "createdAt": "2024-01-15T01:06:34.134Z",
    "updatedAt": "2024-01-15T01:06:34.134Z",
    "subcategoryid": null,
    "categoryid": {
      "id": "ef7088d3-b930-45c5-872d-8d69924ab0aa",
      "name": "Diamond",
      "description": "Diamond",
      "image": null,
      "status": 0,
      "createdAt": "2024-01-14T23:27:35.002Z",
      "updatedAt": "2024-01-14T23:27:35.002Z"
    },
    "innercategoryid": null
  },]

  return (
    <section className="w-full">
      <div className="flex flex-col items-center py-10 md:py-16 px-5 container mx-auto">
        <div className="pb-8 flex w-full flex-row items-center justify-center flex-wrap">
          <div className="w-full text-center flex flex-col items-center">
            <h1 className="font-poppins text-[#211c50] text-3xl md:text-4xl font-bold mb-4">
              New Arrivals
            </h1>
            <img src={K1} alt="k1" className="w-24 md:w-32" />
          </div>
        </div>
        <div className="mb-10">
          <h1 className="font-poppins font-semibold text-black text-xl md:text-2xl text-center mb-2 pb-6">
            Shop
          </h1>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
            {latestProducts?.map((product: productType) => (
              <div key={product?.id} className="mb-5 rounded-3xl overflow-hidden shadow">
                <div className="mx-auto w-full">
                  <img
                    src={product?.productimage?.[0] || ''}
                    alt="Arrive"
                    className="max-w-full block shadow-none h-[250px] object-cover w-fit mx-auto"
                  />
                </div>
                <div className="p-4 text-center text-base">
                  <div className="">{product?.title}</div>
                  <div className="text-[#211c50] font-medium">
                    ${product?.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center text-sm md:text-base font-medium font-poppins">
          <Button
            variant="outline"
            className="border border-[#211c50] py-2 px-6 hover:text-white hover:bg-[#211c50]"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
