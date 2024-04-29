function HotDeal() {
  return (
    <div>
      <div className="container mx-auto lg:px-20 md:px-12 px-6">
        <div className="flex flex-col items-center pb-10">
          <h3 className="text-3xl font-medium  pb-2 uppercase"> Hot Deal</h3>

          <div className="bg-[#FAC056] h-0.5 px-8"></div>
          <p className="pt-4">{`Don't Miss Today's Featured Deals`}</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 grid-cols-1 ">
          <div className="">
            <div className=" ">
              <img src="https://i.postimg.cc/nzz3ZRr7/Stoneware.jpg" alt="" />
            </div>
            <div className="flex gap-2 justify-center pt-4 font-semibold">
              <h4 className="text-gray-400 line-through">$24.00</h4>
              <h4 className="text-[#FAC056]">$20.00</h4>
            </div>
          </div>
          <div className="">
            <div className=" ">
              <img src="https://i.postimg.cc/50RfgRD2/Porcelain.jpg" alt="" />
            </div>
            <div className="flex gap-2 justify-center pt-4 font-semibold">
              <h4 className="text-gray-400 line-through">$20.00</h4>
              <h4 className="text-[#FAC056]">$17.00</h4>
            </div>
          </div>
          <div className="">
            <div className="  ">
              <img
                src="https://i.postimg.cc/vTr5ffSX/Ceramics-Architectural.jpg"
                alt=""
              />
            </div>
            <div className="flex gap-2 justify-center pt-4 font-semibold">
              <h4 className="text-gray-400 line-through">$16.00</h4>
              <h4 className="text-[#FAC056]">$13.00</h4>
            </div>
          </div>
          <div className="">
            <div className=" ">
              <img
                src="https://i.postimg.cc/1tMK0NBc/Home-decor-pottery.jpg"
                alt=""
              />
            </div>
            <div className="flex gap-2 pt-4 justify-center font-semibold">
              <h4 className="text-gray-400 line-through">$24.00</h4>
              <h4 className="text-[#FAC056]">$19.00</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotDeal;
