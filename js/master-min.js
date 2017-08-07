$(document).ready(function() {
    const e = "8/31/17";
    const s = [];
    function i(e, s, i, t, a, o, r, n, l, c, h, d, m, p, u, g, f, w, y, v, b, k, I, M, A, P, S, C, D) {
        this.year = e;
        this.make = s;
        this.model = i;
        this.color = t;
        this.doors = a;
        this.engine = o;
        this.transmission = r;
        this.brakes = n;
        this.steering = l;
        this.power = c;
        this.equipment = h;
        this.vin = d;
        this.stock = m;
        this.miles = p;
        this.msrp = u;
        this.leasePrice = g;
        this.residual = f;
        this.security = w;
        this.bankFee = y;
        this.moneyDown = v;
        this.totalPayment = b;
        this.months = k;
        this.milesPerYear = I;
        this.thereAfter = M;
        this.totalAtInception = A;
        this.additionalInfo = P;
        this.vehicleImage = S;
        this.vehicleUrl = C;
        this.buyItNow = D;
    }
    function t(s) {
        document.body.innerHTML += '<div class="specialContainer"><div class="specialContent leftContent"><h3 class="yearMake">' + s.year + " " + s.make + '</h3><h2 class="modelTrim">' + s.model + '</h2><img src="' + s.vehicleImage + '" alt="Mazda vehicle image" class="vehicleImage"></div><div class="specialContent rightContent"><h3 class="leaseHead">Lease this vehicle for:</h3><div class="leaseQuoteSection"><h1 class="lease">$' + s.leasePrice + '</h1><h3 class="monthsSections">/MO<br>' + s.months + ' MOS</h3></div><h4 class="moneyDue">$' + s.totalAtInception + " DUE AT SIGNING</h4>" + s.buyItNow + '<a href="' + s.vehicleUrl + '" class="linkButton" target="_blank">VIEW VEHICLE</a><p class="disclaimer">VIN ' + s.vin + ". Stk " + s.stock + ". " + s.doors + ", " + s.engine + ", " + s.transmission + ", air conditioning, power steering/ABS brakes/windows/locks/mirrors, cd/MP3, " + s.equipment + ". MSRP: $" + s.msrp + ". $" + s.totalAtInception + " due at inception. $" + s.moneyDown + " down + 1st mo pymt $" + s.leasePrice + "+ bank fee of $595 incl. + $0 sec dep. $" + s.totalPayment + " ttl pymts/$" + s.residual + " residual." + s.additionalInfo + " Prices include all costs to be paid by a consumer except for licensing, registration, taxes, and $299 doc. fee. Tier 1 credit approval thru primary lender. Lessee resp. for excess wear/tear. 10K mi. per yr/.25¢ per mi. over thereafter. See dealer for complete details. Not resp. for typos. Offers expire " + e + ".</p></div></div>";
    }
    s[0] = new i(2017, "Mazda", 'CX-9 <span class="superBold">TOURING</span>', "Silver", "5DR Hatch", "4-cylinder Automatic with OD AWD", "Automatic AWD", "abs breaks,", "power steering,", "power windows/locks/mirrors,", "air conditioning, AM/FM radio, cruise control, leatehr interior, heated seats, 3rd row seating, roof rack, moonroof, dual airbags, side airbags,traction control, alloy wheels, keyless remote entry, r/wiper/washer, premium package, navigation, foglights, backup sensors", "H0143013", "MZH0904", "", "40,905", 279, "24,952", 0, "included", "4,090", "10,044", 36, 10, ".15", "4,964.50", "", "vehicleImages/MZH0904.jpg", "http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda+CX-9-86363e4b0a0e0ae7682674b80f7d7eb6.htm", "");
    for (var a = 0; a < s.length; a++) {
        t(s[a]);
    }
});