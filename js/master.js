$(document).ready(function(){

  const expiration =  '3/31/17';
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
     vehicleUrl
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

        <a href="${thisCar.vehicleUrl}" class="linkButton" target="_blank">VIEW VEHICLE</a>

        <p class="disclaimer">VIN ${thisCar.vin}. Stk ${thisCar.stock}. ${thisCar.doors}, ${thisCar.engine}, ${thisCar.transmission}, air conditioning, power steering/ABS brakes/windows/locks/mirrors, cd/MP3, ${thisCar.equipment}. MSRP: $${thisCar.msrp}. $${thisCar.totalAtInception} due at inception. $${thisCar.moneyDown} down + 1st mo pymt $${thisCar.leasePrice}+ bank fee incl. + $0 sec dep. $${thisCar.totalPayment} ttl pymts/$${thisCar.residual} residual.${thisCar.additionalInfo} Prices include all costs to be paid by a consumer except for licensing, registration, taxes, and $299 doc. fee. Tier 1 credit approval thru primary lender. Lessee resp. for excess wear/tear. 10K mi. per yr/.25¢ per mi. over thereafter. See dealer for complete details. Not resp. for typos. Offers expire ${expiration}.</p>
      </div>
    </div>
    `

  }


  vehicleArray[0] = new Vehicle(
    2016.5,
    'Mazda',
    'CX-5 TOURING',
    'Silver',
    '5DR',
    '4-cylinder Automatic with OD AWD',
    'Automatic',
    'abs breaks,',
    'power steering,',
    'power windows/locks/seats/mirrors,',
    'cruise control, dual/side airbags, traction control, alloy wheels, keyless remote enntry, r/wiper/washer',
    'G0903506',
    'MZG2234',
    '',
    '27,515',
    189,
    '16,784',
    0,
    'included',
    '2,751',
    '6,804',
    36,
    10,
    '.15',
    '3,535',
    '',
    'vehicleImages/cx5.jpg',
    'http://www.ramseymazda.com/new/Mazda/2016-Mazda-Mazda+CX-5-714db7880a0e0ae73edd85543eb739ce.htm');
  vehicleArray[1] = new Vehicle(
    2017,
    'Mazda',
    'MAZDA3 TOURING',
    'Silver',
    '4DR',
    '4-cylinder automatic with OD',
    'Automatic',
    'power brakes',
    'power steering',
    'power windows/locks/mirrors,',
    'cruise control, dual/side airbags, traction control, alloy wheels, keyless remote entry',
    'H1122246',
    'MZH0135',
    '',
    '22,330',
    149,
    '12,281',
    '0',
    'inc',
    '2,233',
    '5,364',
    '36',
    '10',
    '.15',
    '2,977',
    '',
    'vehicleImages/m3.png',
    'http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda3-e05917e70a0e0a6b1e295666475b7bc5.htm');
  vehicleArray[2] = new Vehicle(
    2017,
    'Mazda',
    'MAZDA6 SPORT',
    'Machine Gray',
    '4DR',
    '4-cylinder automatic with OD',
    'Automatic',
    'power brakes',
    'power steering',
    'power windows/locks/mirrors,',
    'cruise control, dual/side airbags, tractionn control, alloy wheels, keyless remote entry',
    'H1128769',
    'MZH0273',
    '',
    '24,170',
    189,
    '12,810',
    '0',
    'inc',
    '2,417',
    '6,804',
    '36',
    '10',
    '.15',
    '3,201',
    '',
    'vehicleImages/m6.png',
    'http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda6-6c26ea810a0e0a6b1b4f73a5ab69bf67.htm');
  vehicleArray[3] = new Vehicle(
    2017,
    'Mazda',
    'CX-3',
    'Black',
    '5DR hatch',
    '4-cylinder',
    'automatic with OD AWD',
    'power brakes',
    'power steering',
    'power windows/locks/seats/mirrors,',
    'cruise control, dual/side airbags, traction control, alloy wheels, keyless remote entry, r/wiper/washer',
    'H0161920',
    'MZH0214',
    '',
    '22,110',
    175,
    '12,823',
    '0',
    'inc',
    '2,241',
    '6,300',
    '36',
    '10',
    '.15',
    '2,981',
    '',
    'vehicleImages/cx3.png',
    'http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda+CX-3-da7d1d830a0e0a1771591b19e093828e.htm');
  vehicleArray[4] = new Vehicle(
      2016,
      'Mazda',
      'CX-9 TOURING',
      'Titanium',
      '5DR hatch 7 passenger',
      '4-cylinder Automatic with OD AWD',
      'Automatic',
      'abs breaks',
      'power steering',
      'power windows/locks/seats/mirrors,',
      'cruise control, dual/side airbags, 3rd row seating, traction control, alloy wheels, keyless remote enntry, r/wiper/washer',
      'G0121829',
      'MZG2078',
      '',
      '38,670',
      229,
      '23,202',
      '0',
      'inc',
      '3,867',
      '7,884',
      '36',
      '10',
      '.15',
      '4,691 ',
      '',
      'vehicleImages/cx9.png',
      'http://www.ramseymazda.com/new/Mazda/2016-Mazda-Mazda+CX-9-eef8a37c0a0e0a1771591b19a500c5f8.htm');

  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});
