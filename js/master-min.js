$(document).ready(function() {
    const e = "8/31/17";
    const a = [];
    function i(e, a, i, t, s, r, o, n, c, l, d, h, m, w, p, M, g, u, y, b, A, k, f, z, D, v, H, I, O) {
        this.year = e;
        this.make = a;
        this.model = i;
        this.color = t;
        this.doors = s;
        this.engine = r;
        this.transmission = o;
        this.brakes = n;
        this.steering = c;
        this.power = l;
        this.equipment = d;
        this.vin = h;
        this.stock = m;
        this.miles = w;
        this.msrp = p;
        this.leasePrice = M;
        this.residual = g;
        this.security = u;
        this.bankFee = y;
        this.moneyDown = b;
        this.totalPayment = A;
        this.months = k;
        this.milesPerYear = f;
        this.thereAfter = z;
        this.totalAtInception = D;
        this.additionalInfo = v;
        this.vehicleImage = H;
        this.vehicleUrl = I;
        this.buyItNow = O;
    }
    function t(a) {
        document.body.innerHTML += '<div class="specialContainer"><div class="specialContent leftContent"><h3 class="yearMake">' + a.year + " " + a.make + '</h3><h2 class="modelTrim">' + a.model + '</h2><img src="' + a.vehicleImage + '" alt="Mazda vehicle image" class="vehicleImage"></div><div class="specialContent rightContent"><h3 class="leaseHead">Lease this vehicle for:</h3><div class="leaseQuoteSection"><h1 class="lease">$' + a.leasePrice + '</h1><h3 class="monthsSections">/MO<br>' + a.months + ' MOS</h3></div><h4 class="moneyDue">$' + a.totalAtInception + " DUE AT SIGNING</h4>" + a.buyItNow + '<a href="' + a.vehicleUrl + '" class="linkButton" target="_blank">VIEW VEHICLE</a><p class="disclaimer">VIN ' + a.vin + ". Stk " + a.stock + ". " + a.doors + ", " + a.engine + ", " + a.transmission + ", air conditioning, power steering/ABS brakes/windows/locks/mirrors, cd/MP3, " + a.equipment + ". MSRP: $" + a.msrp + ". $" + a.totalAtInception + " due at inception. $" + a.moneyDown + " down + 1st mo pymt $" + a.leasePrice + "+ bank fee of $595 incl. + $0 sec dep. $" + a.totalPayment + " ttl pymts/$" + a.residual + " residual." + a.additionalInfo + " Prices include all costs to be paid by a consumer except for licensing, registration, taxes, and $299 doc. fee. Tier 1 credit approval thru primary lender. Lessee resp. for excess wear/tear. 10K mi. per yr/.25¢ per mi. over thereafter. See dealer for complete details. Not resp. for typos. Offers expire " + e + ".</p></div></div>";
    }
    a[0] = new i(2017, "Mazda", "MAZDA3 TOURING", "Silver", "4DR", "4-cylinder Automatic with OD FWD", "Automatic FWD", "abs breaks,", "power steering,", "power windows/locks/mirrors,", "air conditioning, AM/FM radio, cruise control, dual airbags, side airbags,traction control, alloy wheels, keyless remote entry", "HM117158", "MZH0184", "", "22,330", 139, "12,281.50", 0, "included", "3,349.50", "5,004", 36, 10, ".15", "4083.50", "", "vehicleImages/MZH0184.jpg", "http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda3-233019a10a0e0ae77948e5c823783c3e.htm", "");
    a[1] = new i(2017, "Mazda", "MAZDA6 SPORT", "Titainum", "4DR", "4-cylinder Automatic with OD FWD", "Automatic FWD", "abs breaks,", "power steering,", "power windows/locks/mirrors,", "air conditioning, AM/FM radio, cruise control, dual airbags, side airbags,traction control, alloy wheels, keyless remote entry", "H1120561", "MZH0212", "", "23,830", 139, "12,153.30", 0, "included", "3,574.50", "5,004", 36, 10, ".15", "4,308.50", "", "vehicleImages/MZH0212.jpg", "http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda6-eef8e6ea0a0e0a1771591b19fff16f61.htm", "");
    a[2] = new i(2017, "Mazda", "CX-3 SPORT", "Ceramic", "5DR Hatch", "4-cylinder Automatic with OD AWD", "Automatic AWD", "abs breaks,", "power steering,", "power windows/locks/mirrors,", "air conditioning, AM/FM radio, cruise control, dual airbags, side airbags,traction control, alloy wheels, keyless remote entry, r/wiper/washer", "H0167999", "MZH0399", "", "22,150", 149, "12,847", 0, "included", "3,322.50", "5,364", 36, 10, ".15", "4,066.50", "", "vehicleImages/MZH0399.jpg", "http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda+CX-3-4b3de5510a0e0a6b38ca1f544875c90b.htm", "");
    a[3] = new i(2017, "Mazda", "MAZDA3 TOURING", "Ceramic", "5DR Hatch", "4-cylinder Automatic with OD FWD", "Automatic FWD", "abs breaks,", "power steering,", "power windows/locks/mirrors,", "air conditioning, AM/FM radio, cruise control, dual airbags, side airbags,traction control, alloy wheels, keyless remote entry, r/wiper/washer", "HM134536", "MZH0372", "", "23,120", 149, "12,947", 0, "included", "3,468", "5,364", 36, 10, ".15", "4,212", "", "vehicleImages/MZH0372.jpg", "http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda3-f1da91380a0e0ae841d6a6b21ba3f8d7.htm", "");
    a[4] = new i(2017, "Mazda", "CX-5 SPORT", "Electric Blue", "5DR Hatch", "4-cylinder Automatic with OD AWD", "Automatic AWD", "abs breaks,", "power steering,", "power windows/locks/mirrors,", "air conditioning, AM/FM radio, cruise control, dual airbags, side airbags,traction control, alloy wheels, keyless remote entry, r/wiper/washer", "H0164440", "MZH0888", "", "26,285", 159, "26,285", 0, "included", "3,942.75", "5,724", 36, 10, ".15", "4,696.75", "", "vehicleImages/MZH0888.jpg", "http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda+CX-5-774840d90a0e0adf5dc31896880b98ec.htm", "");
    a[5] = new i(2017, "Mazda", "CX-9 TOURING", "Silver", "5DR Hatch", "4-cylinder Automatic with OD AWD", "Automatic AWD", "abs breaks,", "power steering,", "power windows/locks/mirrors,", "air conditioning, AM/FM radio, cruise control, leatehr interior, heated seats, 3rd row seating, roof rack, moonroof, dual airbags, side airbags,traction control, alloy wheels, keyless remote entry, r/wiper/washer, premium package, navigation, foglights, backup sensors", "H0143013", "MZH0904", "", "40,905", 279, "24,952", 0, "included", "4,090", "10,044", 36, 10, ".15", "4,964.50", "", "vehicleImages/MZH0904.jpg", "http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda+CX-9-86363e4b0a0e0ae7682674b80f7d7eb6.htm", "");
    for (var s = 0; s < a.length; s++) {
        t(a[s]);
    }
});