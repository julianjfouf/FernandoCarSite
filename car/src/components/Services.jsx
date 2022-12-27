import React, { useState, useEffect } from "react";
import Package from "./subcomponent/Package";

const Services = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [time, setTotalTime] = useState(0);
  const [selected, setSelected] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);

  function costEstimator() {
    if (selected === 1) {
      setTotalCost(60);
    }
    if (selected === 2) {
      setTotalCost(150);
    }
    if (selected === 3) {
      setTotalCost(75);
    }
  }

  function timeEstimator() {
    if (selected === 1) {
      setTotalTime(75);
    }
    if (selected === 2) {
      setTotalTime(120);
    }
    if (selected === 3) {
      setTotalTime(90);
    }
  }

  useEffect(() => {
    setSelectedServices({});
    setTotalCost(0);
    setTotalTime(0);
  }, [selected]);

  function handleSelection(event) {
    const service = event.target.value;
    const price = event.target.dataset.price;
    const time = event.target.dataset.time;
    if (event.target.checked) {
      setSelectedServices({ ...selectedServices, [service]: { price, time } });
    } else {
      const updatedServices = { ...selectedServices };
      delete updatedServices[service];
      setSelectedServices(updatedServices);
    }
  }

  function calculateTotalCost() {
    setTotalCost(0);
    let total = 0;
    for (const service in selectedServices) {
      const m = selectedServices[service];
      const l = m.price;
      total += parseInt(l);
    }
    costEstimator();
    setTotalCost((prev) => prev + total);
    calculateTotalTime();
  }

  function calculateTotalTime() {
    setTotalTime(0);
    let total = 0;
    for (const service in selectedServices) {
      const m = selectedServices[service];
      const l = m.time;
      total += parseInt(l);
    }
    timeEstimator();
    setTotalTime((prev) => prev + total);
  }

  return (
    <div
      id="services"
      className="container mx-auto bg-white w-full h-full flex justify-center flex-col items-center pb-24 pt-12 mt-[-48px]"
    >
      <div className="services">
        <div class="container container__pricing">
          <div class="row services-row">
            <div class="pricing__text">
              <div class="section__subtitle pricing__subtitle">PRICING</div>
              <div class="section__title pricing__title">
                <span class="purple">Reasonable & Flexible Options</span>
              </div>
              <p class="section__description pricing__description">
                Select the services you want to get an estimated cost and time.
              </p>
            </div>
            <div className="mt-16">
              <div className="w-full flex justify-start items-center">
                <div className="bg-yellow-600 rounded-full p-4 text-white text-xl h-16 w-16 flex justify-center items-center font-semibold">
                  1/3
                </div>
                <h1 className="text-4xl ml-4 text-yellow-600">
                  Select your package
                </h1>
              </div>
              <div className="flex p-10 gap-20 flex-wrap justify-center">
                <Package
                  title="Express Detail"
                  description={[
                    "Foam Bath",
                    "2 Bucket Wash",
                    "Wheels Cleaned",
                    "Tires Cleaned & Conditioned",
                    "Windows & Door Jambs",
                    "Interior Wipe Down & Vacuum",
                  ]}
                  price={60}
                  id={1}
                  cost={60}
                  setSelected={setSelected}
                  selected={selected === 1}
                />
                <Package
                  title="Clay Wax & Seal"
                  description={[
                    "Foam Bath",
                    "2 Bucket Wash",
                    "Clay Bar Treatment",
                    "6 mo. Ceramic Sealant",
                    `Interior Blowout & Vacuum`,
                    "Leather Treatment",
                  ]}
                  id={2}
                  price={150}
                  setSelected={setSelected}
                  selected={selected === 2}
                />
                <Package
                  title="Full Interior or Exterior"
                  description={[
                    "6-8 mo. Paint Sealant",
                    "Showroom Paint Gloss",
                    "Paint Protectant/Hydrophobic Coat",
                    "Carpet Deep Clean",
                    "Leather Conditioned",
                    "Paint Enhancement",
                    "Deep Interior Blowout",
                  ]}
                  id={3}
                  price={75}
                  setSelected={setSelected}
                  selected={selected === 3}
                />
              </div>
              <div className="my-10">
                {selected === 1 || selected === 2 ? (
                  <>
                    <div className="w-full flex justify-start items-center">
                      <div className="bg-yellow-600 rounded-full p-4 text-white text-xl h-16 w-16 flex justify-center items-center font-semibold">
                        2/3
                      </div>
                      <h1 className="text-4xl ml-4 text-yellow-600">
                        Select any additional services
                      </h1>
                    </div>
                    <div className="flex flex-col justify-center items-center p-8 px-12 border border-gray-200 text-slate-600 rounded shadow-lg m-5 max-w-fit mx-auto">
                      <h1 className="text-4xl mb-5 font-bold">
                        Additional Services
                      </h1>
                      <div className="flex justify-center items-center gap-5 my-3 relative">
                        <span
                          className={`${
                            selectedServices["service1"]
                              ? `text-yellow-600`
                              : null
                          } text-lg`}
                        >
                          <span className="font-semibold">$15</span> Pet Hair Removal
                        </span>
                        <input
                          className=""
                          type="checkbox"
                          value="service1"
                          data-price={15}
                          data-time={15}
                          checked={selectedServices["service1"]}
                          onChange={handleSelection}
                        />
                      </div>
                      <div className="flex justify-center items-center gap-5 my-3">
                        <span
                          className={`${
                            selectedServices["service2"]
                              ? `text-yellow-600`
                              : null
                          } text-lg`}
                        >
                          <span className="font-semibold">$20</span> Leather Seats Clean & Condition
                        </span>
                        <input
                          type="checkbox"
                          value="service2"
                          data-price={20}
                          data-time={20}
                          checked={selectedServices["service2"]}
                          onChange={handleSelection}
                        />
                      </div>
                      <div className="flex justify-center items-center gap-5 my-3">
                        <span
                          className={`${
                            selectedServices["service3"]
                              ? `text-yellow-600`
                              : null
                          } text-lg`}
                        >
                          <span className="font-semibold">$15</span> Odor Eliminator
                        </span>
                        <input
                          type="checkbox"
                          value="service3"
                          data-price={15}
                          data-time={20}
                          checked={selectedServices["service3"]}
                          onChange={handleSelection}
                        />
                      </div>
                      <div className="flex justify-center items-center gap-5 my-3">
                        <span
                          className={`${
                            selectedServices["service4"]
                              ? `text-yellow-600`
                              : null
                          } text-lg`}
                        >
                          <span className="font-semibold">$50</span> Headlight Restoration
                        </span>
                        <input
                          type="checkbox"
                          value="service4"
                          data-price={50}
                          data-time={60}
                          checked={selectedServices["service4"]}
                          onChange={handleSelection}
                        />
                      </div>
                      <div className="flex justify-center items-center gap-5 my-3">
                        <span
                          className={`${
                            selectedServices["service5"]
                              ? `text-yellow-600`
                              : null
                          } text-lg`}
                        >
                          <span className="font-semibold">$35</span> Rim Ceramic Spray (3 mo. protection)
                        </span>
                        <input
                          type="checkbox"
                          value="service5"
                          data-price={35}
                          data-time={20}
                          checked={selectedServices["service5"]}
                          onChange={handleSelection}
                        />
                      </div>
                      <div className="flex justify-center items-center gap-5 my-3">
                        <span
                          className={`${
                            selectedServices["service6"]
                              ? `text-yellow-600`
                              : null
                          } text-lg`}
                        >
                          <span className="font-semibold">$20</span> Engine Bay Deep Clean
                        </span>
                        <input
                          type="checkbox"
                          value="service6"
                          data-price={20}
                          data-time={25}
                          checked={selectedServices["service6"]}
                          onChange={handleSelection}
                        />
                      </div>
                      <div className="flex justify-center items-center gap-5 my-3">
                        <span
                          className={`${
                            selectedServices["service7"]
                              ? `text-yellow-600`
                              : null
                          } text-lg`}
                        >
                          <span className="font-semibold">$45</span> Windshield Ceramic Coating
                        </span>
                        <input
                          type="checkbox"
                          value="service7"
                          data-price={45}
                          data-time={15}
                          checked={selectedServices["service7"]}
                          onChange={handleSelection}
                        />
                      </div>
                    </div>
                  </>
                ) : null}
                {selected === 3 ? (
                  <>
                    <div className="w-full flex justify-start items-center">
                      <div className="bg-yellow-600 rounded-full p-4 text-white text-xl h-16 w-16 flex justify-center items-center font-semibold">
                        2/3
                      </div>
                      <h1 className="text-4xl ml-4 text-yellow-600">
                        Select any additional services
                      </h1>
                    </div>
                    <div className="flex flex-col justify-center items-center p-8 px-12 border border-gray-200 text-slate-600 rounded shadow-lg m-5 max-w-fit mx-auto">
                      <h1 className="text-4xl mb-5 font-bold">
                        Additional Services
                      </h1>
                      <div className="flex justify-center items-center gap-5 my-3">
                        <span
                          className={`${
                            selectedServices["service8"]
                              ? `text-yellow-600`
                              : null
                          } text-lg`}
                        >
                          <span className="font-semibold">$50</span> Interior Fabric Coating
                        </span>
                        <input
                          className=""
                          type="checkbox"
                          value="service8"
                          data-price={50}
                          data-time={20}
                          checked={selectedServices["service8"]}
                          onChange={handleSelection}
                        />
                      </div>
                      <div className="flex justify-center items-center gap-5 my-3">
                        <span
                          className={`${
                            selectedServices["service9"]
                              ? `text-yellow-600`
                              : null
                          } text-lg`}
                        >
                          <span className="font-semibold">$60</span> Wheel Face Ceramic Coating
                        </span>
                        <input
                          type="checkbox"
                          value="service9"
                          data-price={60}
                          data-time={25}
                          checked={selectedServices["service9"]}
                          onChange={handleSelection}
                        />
                      </div>
                      <div className="flex justify-center items-center gap-5 my-3">
                        <span
                          className={`${
                            selectedServices["service10"]
                              ? `text-yellow-600`
                              : null
                          } text-lg`}
                        >
                          <span className="font-semibold">$75</span> Leather Seat Ceramic Coating
                        </span>
                        <input
                          type="checkbox"
                          value="service10"
                          data-price={75}
                          data-time={20}
                          checked={selectedServices["service10"]}
                          onChange={handleSelection}
                        />
                      </div>
                      <div className="flex justify-center items-center gap-5 my-3">
                        <span
                          className={`${
                            selectedServices["service11"]
                              ? `text-yellow-600`
                              : null
                          } text-lg`}
                        >
                          <span className="font-semibold">$35</span> Rim Ceramic Spray (3 mo. protection)
                        </span>
                        <input
                          type="checkbox"
                          value="service11"
                          data-price={35}
                          data-time={20}
                          checked={selectedServices["service11"]}
                          onChange={handleSelection}
                        />
                      </div>
                      <div className="flex justify-center items-center gap-5 my-3">
                        <span
                          className={`${
                            selectedServices["service12"]
                              ? `text-yellow-600`
                              : null
                          } text-lg`}
                        >
                          <span className="font-semibold">$45</span> Windshield Ceramic Coating
                        </span>
                        <input
                          type="checkbox"
                          value="service12"
                          data-price={45}
                          data-time={15}
                          checked={selectedServices["service12"]}
                          onChange={handleSelection}
                        />
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
              {selected ? (
                <>
                  <div className="w-full flex justify-start items-center">
                    <div className="bg-yellow-600 rounded-full p-4 text-white text-xl h-16 w-16 flex justify-center items-center font-semibold">
                      3/3
                    </div>
                    <h1 className="text-4xl ml-4 text-yellow-600">
                      Estimate booking summary
                    </h1>
                  </div>
                  <div className="w-full flex flex-col justify-center items-center gap-20 my-10">
                    <button
                      className="border border-1 border-yellow-600 rounded text-yellow-600 p-4 active:translate-y-[1px] shadow-md"
                      onClick={calculateTotalCost}
                    >
                      Estimate
                    </button>
                    <div className="flex justify-center items-center gap-20">
                      <p className="text-3xl text-center leading-relaxed">
                        <span className="font-semibold">Estimated Cost: </span>
                        <br />${totalCost}
                      </p>
                      <p className="text-3xl text-center leading-relaxed">
                        <span className="font-semibold">Estimated Time: </span>
                        <br />
                        {Math.floor(time / 60)} hour(s){" "}
                        {time - Math.floor(time / 60) * 60} minutes
                      </p>
                    </div>
                  </div>
                  <p className="text-center text-sm text-yellow-600 py-5">
                    * prices and times are subject to vary depending on vehicle
                    type
                  </p>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
