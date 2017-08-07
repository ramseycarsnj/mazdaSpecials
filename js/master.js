$(document).ready(function(){

  const expiration =  '8/31/17';
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
    document.body.innerHTML += '<div class="specialContainer"><div class="specialContent leftContent"><h3 class="yearMake">' + thisCar.year + ' ' + thisCar.make + '</h3><h2 class="modelTrim">' + thisCar.model + '</h2><img src="' + thisCar.vehicleImage + '" alt="Mazda vehicle image" class="vehicleImage"></div><div class="specialContent rightContent"><h3 class="leaseHead">Lease this vehicle for:</h3><div class="leaseQuoteSection"><h1 class="lease">$' + thisCar.leasePrice + '</h1><h3 class="monthsSections">/MO<br>' + thisCar.months + ' MOS</h3></div><h4 class="moneyDue">$' + thisCar.totalAtInception + ' DUE AT SIGNING</h4>' + thisCar.buyItNow + '<a href="' + thisCar.vehicleUrl + '" class="linkButton" target="_blank">VIEW VEHICLE</a><p class="disclaimer">VIN ' + thisCar.vin + '. Stk ' + thisCar.stock + '. ' + thisCar.doors + ', ' + thisCar.engine + ', ' + thisCar.transmission + ', air conditioning, power steering/ABS brakes/windows/locks/mirrors, cd/MP3, ' + thisCar.equipment + '. MSRP: $' + thisCar.msrp + '. $' + thisCar.totalAtInception + ' due at inception. $' + thisCar.moneyDown + ' down + 1st mo pymt $' + thisCar.leasePrice + '+ bank fee of $595 incl. + $0 sec dep. $' + thisCar.totalPayment + ' ttl pymts/$' + thisCar.residual + ' residual.' + thisCar.additionalInfo + ' Prices include all costs to be paid by a consumer except for licensing, registration, taxes, and $299 doc. fee. Tier 1 credit approval thru primary lender. Lessee resp. for excess wear/tear. 10K mi. per yr/.25¢ per mi. over thereafter. See dealer for complete details. Not resp. for typos. Offers expire ' + expiration + '.</p></div></div>';

  }

  vehicleArray[0] = new Vehicle(
  2017,
  'Mazda',
  'CX-9 <span class="superBold">TOURING</span>',
  'Silver',
  '5DR Hatch',
  '4-cylinder Automatic with OD AWD',
  'Automatic AWD',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'air conditioning, AM/FM radio, cruise control, leatehr interior, heated seats, 3rd row seating, roof rack, moonroof, dual airbags, side airbags,traction control, alloy wheels, keyless remote entry, r/wiper/washer, premium package, navigation, foglights, backup sensors',
  'H0143013',
  'MZH0904',
  '',
  '40,905',
  279,
  '24,952',
  0,
  'included',
  '4,090',
  '10,044',
  36,
  10,
  '.15',
  '4,964.50',
  '',
  'vehicleImages/MZH0904.jpg',
  'http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda+CX-9-86363e4b0a0e0ae7682674b80f7d7eb6.htm',
  '');


// <div style="margin-bottom: 20px;background-color:#fff;">Buy Now Price: <span style="font-weight: 900; font-size: 35px;background-color: #fff;">$25,995<sup>*</sup></span></div>

  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});
