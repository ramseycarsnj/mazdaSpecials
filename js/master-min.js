$(document).ready(function() {
    const e = "8/31/17";
    const s = [];
    function t(e, s, t, i, a, n, o, r, l, c, h, d, m, p, f, u, v, y, g, I, k, b, w, P, S, M, A, C, N) {
        this.year = e;
        this.make = s;
        this.model = t;
        this.color = i;
        this.doors = a;
        this.engine = n;
        this.transmission = o;
        this.brakes = r;
        this.steering = l;
        this.power = c;
        this.equipment = h;
        this.vin = d;
        this.stock = m;
        this.miles = p;
        this.msrp = f;
        this.leasePrice = u;
        this.residual = v;
        this.security = y;
        this.bankFee = g;
        this.moneyDown = I;
        this.totalPayment = k;
        this.months = b;
        this.milesPerYear = w;
        this.thereAfter = P;
        this.totalAtInception = S;
        this.additionalInfo = M;
        this.vehicleImage = A;
        this.vehicleUrl = C;
        this.buyItNow = N;
    }
    function i(s) {
        document.body.innerHTML += '<div class="specialContainer"><div class="specialContent leftContent"><h3 class="yearMake">' + s.year + " " + s.make + '</h3><h2 class="modelTrim">' + s.model + '</h2><img src="' + s.vehicleImage + '" alt="Mazda vehicle image" class="vehicleImage"></div><div class="specialContent rightContent"><h3 class="leaseHead">Lease this vehicle for:</h3><div class="leaseQuoteSection"><h1 class="lease">$' + s.leasePrice + '</h1><h3 class="monthsSections">/MO<br>' + s.months + ' MOS</h3></div><h4 class="moneyDue">$' + s.totalAtInception + " DUE AT SIGNING</h4>" + s.buyItNow + '<a href="' + s.vehicleUrl + '" class="linkButton" target="_blank">VIEW VEHICLE</a><p class="disclaimer">VIN ' + s.vin + ". Stk " + s.stock + ". " + s.doors + ", " + s.engine + ", " + s.transmission + ", air conditioning, power steering/ABS brakes/windows/locks/mirrors, cd/MP3, " + s.equipment + ". MSRP: $" + s.msrp + ". $" + s.totalAtInception + " due at inception. $" + s.moneyDown + " down + 1st mo pymt $" + s.leasePrice + "+ bank fee of $595 incl. + $0 sec dep. $" + s.totalPayment + " ttl pymts/$" + s.residual + " residual." + s.additionalInfo + " Prices include all costs to be paid by a consumer except for licensing, registration, taxes, and $299 doc. fee. Tier 1 credit approval thru primary lender. Lessee resp. for excess wear/tear. 10K mi. per yr/.15¢ per mi. over thereafter. See dealer for complete details. Not resp. for typos. Offers expire " + e + ".</p></div></div>";
    }
    for (var a = 0; a < s.length; a++) {
        i(s[a]);
    }
});