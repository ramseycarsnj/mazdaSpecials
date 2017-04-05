$(document).ready(function(){

  const expiration =  '4/30/17';
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
2017,
'Mazda',
'CX-3 SPORT',
'Black',
'5DR hatch',
'4-cylinder Automatic with OD AWD',
'Automatic',
'abs breaks,',
'power steering,',
'power windows/locks/seats/mirrors,',
'air conditioning, AM/FM radio, cruise control, dual airbags, side airbags, traction control, alloy wheels, keyless remote entry, R/wiper/washer',
'H0161920',
'MZH0214',
'',
'22,110',
179,
'13,266',
0,
'included',
'2,211',
'6,444',
36,
10,
'.15',
'2,985',
'',
'vehicleImages/cx3.png',
'http://www.ramseymazda.com/new/Mazda/2016-Mazda-Mazda+CX-5-714db7880a0e0ae73edd85543eb739ce.htm');

vehicleArray[1] = new Vehicle(
2017,
'Mazda',
'MAZDA3 TOURING',
'Silver',
'4DR',
'4-cylinder Automatic with OD',
'Automatic',
'abs breaks,',
'power steering,',
'power windows/locks/seats/mirrors,',
'air conditioning, AM/FM stereo, cruise control, dual airbags, side airbags, traction control, alloy wheels, keyless remote entry',
'H1122246',
'MZH0135',
'',
'22,330',
184,
'12,281.50',
0,
'included',
'2,233',
'6,624',
36,
10,
'.15',
'3,012',
'',
'vehicleImages/m3.png',
'http://www.ramseymazda.com/new/Mazda/2016-Mazda-Mazda+CX-5-714db7880a0e0ae73edd85543eb739ce.htm');

vehicleArray[2] = new Vehicle(
2017,
'Mazda',
'MAZDA6 SPORT',
'Titanium',
'4DR',
'4-cylinder Automatic with OD',
'Automatic',
'abs breaks,',
'power steering,',
'power windows/locks/seats/mirrors,',
'air conditioning, AM/FM stereo, cruise control, dual airbags, side airbags, traction control, alloy wheels, keyless remote entry',
'H1120561',
'MZH0212',
'',
'23,830',
189,
'12,868',
0,
'included',
'2,383',
'6,804',
36,
10,
'.15',
'3,167',
'',
'vehicleImages/m6.png',
'http://www.ramseymazda.com/new/Mazda/2016-Mazda-Mazda+CX-5-714db7880a0e0ae73edd85543eb739ce.htm');

vehicleArray[3] = new Vehicle(
2016.5,
'Mazda',
'CX-5 GRAND TOURING',
'Silver',
'5DR hatch',
'4-cylinder Automatic with OD AWD',
'Automatic',
'abs breaks,',
'power steering,',
'power windows/locks/seats/mirrors,',
'air conditioning, climate control, leather interior, heated seats, AM/FM stereo, CD player, cruise control, dual airbags, side airbags, roof rack, moonroof, traction control, alloy wheels, keyless remote entry, R wiper/washer',
'G0888735',
'MZG2009',
'',
'31,045',
209,
'18,937.45',
0,
'included',
'3,104.50',
'7,524',
36,
10,
'.15',
'3,908.50',
'',
'vehicleImages/cx5.png',
'http://www.ramseymazda.com/new/Mazda/2016-Mazda-Mazda+CX-5-714db7880a0e0ae73edd85543eb739ce.htm');

vehicleArray[4] = new Vehicle(
2017,
'Mazda',
'CX-9 TOURING',
'Black',
'4DR',
'4-cylinder Automatic with OD AWD',
'Automatic',
'abs breaks,',
'power steering,',
'power windows/locks/seats/mirrors,',
'air conditioning, leather interior, heated seats, AM/FM stereo, cruise control, dual airbags, side airbags, 3rd row seat,  traction control, alloy wheels, keyless remote entry, R wiper/washer',
'H0132525',
'MZH0283',
'',
'38,710',
289,
'25,548.60',
0,
'included',
'3,871',
'10,404',
36,
10,
'.15',
'4,755',
'',
'vehicleImages/cx9.png',
'http://www.ramseymazda.com/new/Mazda/2016-Mazda-Mazda+CX-5-714db7880a0e0ae73edd85543eb739ce.htm');

  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});
