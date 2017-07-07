$(document).ready(function(){

  const expiration =  '7/31/17';
  const vehicleArray = [];

  function Vehicle(
     year,
     make,
     model,
     color,
     doors,
     engine,
     transmission,
     brakes,
     steering,
     power,
     equipment,
     vin,
     stock,
     miles,
     msrp,
     leasePrice,
     residual,
     security,
     bankFee,
     moneyDown,
     totalPayment,
     months,
     milesPerYear,
     thereAfter,
     totalAtInception,
     additionalInfo,
     vehicleImage,
     vehicleUrl,
     buyItNow
    ){
      this.year = year;
      this.make = make;
      this.model = model;
      this.color = color;
      this.doors = doors;
      this.engine = engine;
      this.transmission = transmission;
      this.brakes = brakes;
      this.steering = steering;
      this.power = power;
      this.equipment = equipment;
      this.vin = vin;
      this.stock = stock;
      this.miles = miles;
      this.msrp = msrp;
      this.leasePrice = leasePrice;
      this.residual = residual;
      this.security = security;
      this.bankFee = bankFee;
      this.moneyDown = moneyDown;
      this.totalPayment = totalPayment;
      this.months = months;
      this.milesPerYear = milesPerYear;
      this.thereAfter = thereAfter;
      this.totalAtInception = totalAtInception;
      this.additionalInfo = additionalInfo;
      this.vehicleImage = vehicleImage;
      this.vehicleUrl = vehicleUrl;
      this.buyItNow = buyItNow;
  }

  function listing(thisCar){
    document.body.innerHTML += `
    <div class="specialContainer">
      <div class="specialContent leftContent">
        <h3 class="yearMake">${thisCar.year} ${thisCar.make}</h3>
        <h2 class="modelTrim">${thisCar.model}</h2>
        <img src="${thisCar.vehicleImage}" alt="Mazda vehicle image" class="vehicleImage">
      </div>
      <div class="specialContent rightContent">
      <h3 class="leaseHead">Lease this vehicle for:</h3>
        <div class="leaseQuoteSection">

          <h1 class="lease">$${thisCar.leasePrice}</h1>
          <h3 class="monthsSections">/MO
            <br>
            ${thisCar.months} MOS
          </h3>
        </div>
        <h4 class="moneyDue">$${thisCar.totalAtInception} DUE AT SIGNING</h4>

        ${thisCar.buyItNow}

        <a href="${thisCar.vehicleUrl}" class="linkButton" target="_blank">VIEW VEHICLE</a>

        <p class="disclaimer">VIN ${thisCar.vin}. Stk ${thisCar.stock}. ${thisCar.doors}, ${thisCar.engine}, ${thisCar.transmission}, air conditioning, power steering/ABS brakes/windows/locks/mirrors, cd/MP3, ${thisCar.equipment}. MSRP: $${thisCar.msrp}. $${thisCar.totalAtInception} due at inception. $${thisCar.moneyDown} down + 1st mo pymt $${thisCar.leasePrice}+ bank fee incl. + $0 sec dep. $${thisCar.totalPayment} ttl pymts/$${thisCar.residual} residual.${thisCar.additionalInfo} Prices include all costs to be paid by a consumer except for licensing, registration, taxes, and $299 doc. fee. Tier 1 credit approval thru primary lender. Lessee resp. for excess wear/tear. 10K mi. per yr/.25¢ per mi. over thereafter. See dealer for complete details. Not resp. for typos. Offers expire ${expiration}.</p>
      </div>
    </div>
    `

  }

  vehicleArray[0] = new Vehicle(
  2017,
  'Mazda',
  'CX-5 SPORT',
  'Black',
  '5DR hatch',
  '4-cylinder Automatic with OD FWD',
  'Automatic FWD',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'air conditioning, AM/FM radio, cruise control, dual airbags, side airbags,traction control,  alloy wheels, keyless remote entry, r/wiper/window',
  'H0145954',
  'MZH0709',
  '',
  '24,985',
  209,
  '14,991',
  0,
  'included',
  '2,498',
  '7,524',
  36,
  10,
  '.15',
  '3,302',
  '',
  'vehicleImages/MZH0709.jpg',
  'http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda3-233019a10a0e0ae77948e5c823783c3e.htm',
  '');

  vehicleArray[1] = new Vehicle(
  2017,
  'Mazda',
  'MAZDA3 SPORT',
  'TITANIUM',
  '4DR',
  '4-cylinder Automatic with OD',
  'Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'air conditioning, AM/FM radio, cruise control, dual airbags, traction control,  side airbags, alloy wheels, keyless remote entry',
  'HM1413119',
  'MZH0471',
  '',
  '19,770',
  149,
  '10,675',
  0,
  'included',
  '1,977',
  '5,364',
  36,
  10,
  '.15',
  '2,721',
  '',
  'vehicleImages/MZH0471.jpg',
  'http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda3-7e2837dc0a0e0ae712ca3d21045f2850.htm',
  '');

  vehicleArray[2] = new Vehicle(
  2017,
  'Mazda',
  'MAZDA6 SPORT',
  'Silver',
  '4DR',
  '4-cylinder Automatic with OD',
  'Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'air conditioning, AM/FM radio, cruise control, dual airbags, traction control,  side airbags, alloy wheels, keyless remote entry',
  'H1120561',
  'MZH0212',
  '',
  '23,830',
  169,
  '12,153',
  0,
  'included',
  '2,383',
  '6,084',
  36,
  10,
  '.15',
  '3,147',
  '',
  'vehicleImages/MZH0212.jpg',
  'http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda6-eef8e6ea0a0e0a1771591b19fff16f61.htm',
  '');

  vehicleArray[3] = new Vehicle(
  2017,
  'Mazda',
  'CX-3 SPORT',
  'TITANIUM',
  '5DR hatch',
  '4-cylinder Automatic with OD AWD',
  'Automatic AWD',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'air conditioning, AM/FM radio, cruise control, dual airbags, traction control,  side airbags, alloy wheels, keyless remote entry, r/wiper/washer',
  'H0163101',
  'MZH0272',
  '',
  '22,150',
  179,
  '12,847',
  0,
  'included',
  '2,215',
  '6,444',
  36,
  10,
  '.15',
  '2,989',
  '',
  'vehicleImages/MZH0272.jpg',
  'http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda+CX-3-6c26ea460a0e0a6b1b4f73a572d1537a.htm',
  '');

  vehicleArray[4] = new Vehicle(
  2017,
  'Mazda',
  'CX-9 TOURING',
  'BLACK',
  '4DR',
  '4-cylinder Automatic with OD AWD',
  'Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/seats/mirrors,',
  'air conditioning, AM/FM radio, cruise control, dual airbags, traction control,  side airbags, alloy wheels, keyless remote entry, r/wiper/washer, leater int, heated seats',
  'H0132525',
  'MZH0283',
  '',
  '38,710',
  279,
  '23,613',
  0,
  'included',
  '3,871',
  '10,044',
  36,
  10,
  '.15',
  '4,745',
  '',
  'vehicleImages/MZH0283.jpg',
  'http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda+CX-9-19e0bad40a0e0a1725c5dc92ee32445c.htm',
  '');


// <div style="margin-bottom: 20px;background-color:#fff;">Buy Now Price: <span style="font-weight: 900; font-size: 35px;background-color: #fff;">$25,995<sup>*</sup></span></div>

  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});
