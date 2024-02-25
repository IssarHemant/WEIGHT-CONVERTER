const calcweight = () => {
    let number = document.getElementById("value1").value;
    let option1 = document.getElementById("options1");
    let selectedvalue1 = options1.options[option1.selectedIndex].value;
    let option2 = document.getElementById("options2");
    let selectedvalue2 = options2.options[option2.selectedIndex].value;
  
    const kgtog = (kilograms) => {
      let grams = kilograms * 1000;
      return grams;
    };
    const gtokg = (grams) => {
      let kilograms = grams / 1000;
      return kilograms;
    };
    const kgtotonne = (kilograms) => {
      let tonnes = kilograms / 1000;
      return tonnes;
    };
    const tonnetokg = (tonnes) => {
      let kilograms = tonnes * 1000;
      return kilograms;
    };
    const tonnetog = (tonnes) => {
      let grams = tonnes * 1000000;
      return grams;
    };
    const gtotonne = (grams) => {
      let tonnes = grams / 1000000;
      return tonnes;
    };
    const tonnetopound = (tonnes) => {
      let pounds = tonnes * 2204.62;
      return pounds;
    };
    const poundtotonne = (pounds) => {
      let tonnes = pounds / 2204.62;
      return tonnes;
    };
    const kgtopound = (kilograms) => {
      let pounds = kilograms * 2.2046;
      return pounds;
    };
    const poundtokg = (pounds) => {
      let kilograms = pounds * 0.45359237;
      return kilograms;
    };
    const kgtoimperialton = (kilograms) => {
      let imperialtons = kilograms / 1016.05;
      return imperialtons;
    };
    const imperialtontokg = (imperialtons) => {
      let kilograms = imperialtons * 1016.05;
      return kilograms;
    };
    const kgtouston = (kilograms) => {
      let ustons = kilograms / 907.185;
      return ustons;
    };
    const ustontokg = (ustons) => {
      let kilograms = ustons * 907.185;
      return kilograms;
    };
    const gtoimperialton = (grams) => {
      let imperialtons = grams / 1.016e6;
      return imperialtons;
    };
    const imperialtontog = (imperialtons) => {
      let grams = imperialtons * 1.016e6;
      return grams;
    };
    const gtouston = (grams) => {
      let ustons = grams / 907185;
      return ustons;
    };
    const ustontog = (ustons) => {
      let grams = ustons * 907185;
      return grams;
    };
    const poundtog = (pounds) => {
      let grams = pounds * 453.592;
      return grams;
    };
    const gtopound = (grams) => {
      let pounds = grams * 0.00220462;
      return pounds;
    };
    const poundtouston = (pounds) => {
      let ustons = pounds / 2000;
      return ustons;
    };
    const ustontopound = (ustons) => {
      let pounds = ustons * 2000;
      return pounds;
    };
    const poundtoimperialton = (pounds) => {
      let imperialtons = pounds / 2240;
      return imperialtons;
    };
    const imperialtontopound = (imperialtons) => {
      let pounds = imperialtons * 2240;
      return pounds;
    };
    const imperialtontouston = (imperialtons) => {
      let ustons = imperialtons * 1.12;
      return ustons;
    };
    const ustontoimperialton = (ustons) => {
      let imperialtons = ustons / 1.12;
      return imperialtons;
    };
    const ustontotonne = (ustons) => {
      let tonnes = ustons / 1.10231;
      return tonnes;
    };
    const tonnetouston = (tonnes) => {
      let ustons = tonnes * 1.10231;
      return ustons;
    };
    const tonnetoimperialton = (tonnes) => {
      let imperialtons = tonnes / 1.016;
      return imperialtons;
    };
    const imperialtontotonne = (imperialtons) => {
      let tonnes = imperialtons * 1.016;
      return tonnes;
    };
    const stonetokilogram = (stones) => {
      let kilograms = stones * 6.35029;
      return kilograms;
    };
    const kilogramtostone = (kilograms) => {
      let stones = kilograms / 6.35029;
      return stones;
    };
    const stonetogram = (stones) => {
      let grams = stones * 6350.29;
      return grams;
    };
    const gramtostone = (grams) => {
      let stones = grams / 6350.29;
      return stones;
    };
    const tonnetostone = (tonnes) => {
      let stones = tonnes * 157.473;
      return stones;
    };
    const stonetotonne = (stones) => {
      let tonnes = stones / 157.473;
      return tonnes;
    };
    const imperialtontostone = (imperialtons) => {
      let stones = imperialtons * 160;
      return stones;
    };
    const stonetoimperialton = (stones) => {
      let imperialtons = stones / 160;
      return imperialtons;
    };
    const stonetouston = (stones) => {
      let ustons = stones / 142.857;
      return ustons;
    };
    const ustontostone = (ustons) => {
      let stones = ustons * 142.857;
      return stones;
    };
    const stonetopound = (stones) => {
      let pounds = stones * 14;
      return pounds;
    };
    const poundtostone = (pounds) => {
      let stones = pounds / 14;
      return stones;
    };
    const ouncetokilogram = (ounces) => {
      let kilograms = ounces / 35.274;
      return kilograms;
    };
    const kilogramtoounce = (kilograms) => {
      let ounces = kilograms * 35.274;
      return ounces;
    };
    const ouncetotonne = (ounces) => {
      let tonnes = ounces / 35274;
      return tonnes;
    };
    const tonnetoounce = (tonnes) => {
      let ounces = tonnes * 35274;
      return ounces;
    };
    const ouncetogram = (ounces) => {
      let grams = ounces * 28.3495;
      return grams;
    };
    const gramtoounce = (grams) => {
      let ounces = grams / 28.3495;
      return ounces;
    };
    const ouncetouston = (ounces) => {
      let ustons = ounces / 32000;
      return ustons;
    };
    const ustontoounce = (ustons) => {
      let ounces = ustons * 32000;
      return ounces;
    };
    const imperialtontoounce = (imperialtons) => {
      let ounces = imperialtons * 35840;
      return ounces;
    };
    const ouncetoimperialton = (ounces) => {
      let imperialtons = ounces / 35840;
      return imperialtons;
    };
    const ouncetopound = (ounces) => {
      let pounds = ounces / 16;
      return pounds;
    };
    const poundtoounce = (pounds) => {
      let ounces = pounds * 16;
      return ounces;
    };
    const ouncetostone = (ounces) => {
      let stones = ounces / 224;
      return stones;
    };
    const stonetoounce = (stones) => {
      let ounces = stones * 224;
      return ounces;
    };
    const milligramtokg = (milligrams) => {
      let kilograms = milligrams / 1e6;
      return kilograms;
    };
    const kgtomilligram = (kilograms) => {
      let milligrams = kilograms * 1e6;
      return milligrams;
    };
    const milligramtotonne = (milligrams) => {
      let tonnes = milligrams / 1e9;
      return tonnes;
    };
    const tonnetomilligram = (tonnes) => {
      let milligrams = tonnes * 1e9;
      return milligrams;
    };
    const milligramtog = (milligrams) => {
      let grams = milligrams / 1000;
      return grams;
    };
    const gtomilligram = (grams) => {
      let milligrams = grams * 1000;
      return milligrams;
    };
    const milligramtomicrogram = (milligrams) => {
      let micrograms = milligrams * 1000;
      return micrograms;
    };
    const microgramtomilligram = (micrograms) => {
      let milligrams = micrograms / 1000;
      return milligrams;
    };
    const milligramtouston = (milligrams) => {
      let ustons = milligrams / 9.072e8;
      return ustons;
    };
    const ustontomilligram = (ustons) => {
      let milligrams = ustons * 9.072e8;
      return milligrams;
    };
    const milligramtoimperialton = (milligrams) => {
      let imperialtons = milligrams / 1.016e9;
      return imperialtons;
    };
    const imperialtontomilligram = (imperialtons) => {
      let milligrams = imperialtons * 1.016e9;
      return milligrams;
    };
    const milligramtopound = (milligrams) => {
      let pounds = milligrams / 453600;
      return pounds;
    };
    const poundtomilligram = (pounds) => {
      let milligrams = pounds * 453600;
      return milligrams;
    };
    const milligramtostone = (milligrams) => {
      let stones = milligrams / 6.35e6;
      return stones;
    };
    const stonetomilligram = (stones) => {
      let milligrams = stones * 6.35e6;
      return milligrams;
    };
    const milligramtoounce = (milligrams) => {
      let ounces = milligrams / 28350;
      return ounces;
    };
    const ouncetomilligram = (ounces) => {
      let milligrams = ounces * 28350;
      return milligrams;
    };
    const microgramtokg = (micrograms) => {
      let kilograms = micrograms / 1e9;
      return kilograms;
    };
    const kgtomicrogram = (kilograms) => {
      let micrograms = kilograms * 1e9;
      return micrograms;
    };
    const microgramtotonne = (micrograms) => {
      let tonnes = micrograms / 1e12;
      return tonnes;
    };
    const tonnetomicrogram = (tonnes) => {
      let micrograms = tonnes * 1e12;
      return micrograms;
    };
    const microgramtog = (micrograms) => {
      let grams = micrograms / 1e6;
      return grams;
    };
    const gtomicrogram = (grams) => {
      let micrograms = grams * 1e6;
      return micrograms;
    };
    const microgramtouston = (micrograms) => {
      let ustons = micrograms / 9.072e11;
      return ustons;
    };
    const ustontomicrogram = (ustons) => {
      let micrograms = ustons * 9.072e11;
      return micrograms;
    };
    const microgramtoimperialton = (micrograms) => {
      let imperialtons = micrograms / 1.016e12;
      return imperialtons;
    };
    const imperialtontomicrogram = (imperialtons) => {
      let micrograms = imperialtons * 1.016e12;
      return micrograms;
    };
    const microgramtopound = (micrograms) => {
      let pounds = micrograms / 4.536e8;
      return pounds;
    };
    const poundtomicrogram = (pounds) => {
      let micrograms = pounds * 4.536e8;
      return micrograms;
    };
    const microgramtostone = (micrograms) => {
      let stones = micrograms / 6.35e9;
      return stones;
    };
    const stonetomicrogram = (stones) => {
      let micrograms = stones * 6.35e9;
      return micrograms;
    };
    const microgramtoounce = (micrograms) => {
      let ounces = micrograms / 2.835e7;
      return ounces;
    };
    const ouncetomicrogram = (ounces) => {
      let micrograms = ounces * 2.835e7;
      return micrograms;
    };
    let result;
    if (selectedvalue1 == "kilogram" && selectedvalue2 == "gram") {
      result = kgtog(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Gram<br>Formula:- 1 Gram = Kilogram * 1000`;
    } else if (selectedvalue1 == "gram" && selectedvalue2 == "kilogram") {
      result = gtokg(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Kilogram<br>Formula:- 1 Kilogram = Gram/1000`;
    } else if (selectedvalue1 == "kilogram" && selectedvalue2 == "tonne") {
      result = kgtotonne(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Tonne<br>Formula:- 1 Tonne = Kilogram/1000`;
    } else if (selectedvalue1 == "tonne" && selectedvalue2 == "kilogram") {
      result = tonnetokg(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Kilogram<br>Formula:- 1 Kilogram = Tonne * 1000`;
    } else if (selectedvalue1 == "tonne" && selectedvalue2 == "gram") {
      result = tonnetog(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Gram<br>Formula:- 1 Gram = Tonne * 1000000`;
    } else if (selectedvalue1 == "gram" && selectedvalue2 == "tonne") {
      result = gtotonne(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Tonne<br>Formula:- 1 Tonne = Gram/1000000`;
    } else if (selectedvalue1 == "tonne" && selectedvalue2 == "pound") {
      result = tonnetopound(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Pound<br>Formula:- 1 Pound = Tonne * 2204.62`;
    } else if (selectedvalue1 == "pound" && selectedvalue2 == "tonne") {
      result = poundtotonne(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Tonne<br>Formula:- 1 Tonne = Pound / 2204.62`;
    } else if (selectedvalue1 == "kilogram" && selectedvalue2 == "pound") {
      result = kgtopound(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Pound<br>Formula:- 1 Pound = Kilogram * 2.2046`;
    } else if (selectedvalue1 == "pound" && selectedvalue2 == "kilogram") {
      result = poundtokg(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Kilogram<br>Formula:- 1 Kilogram = Pound * 0.45359237`;
    } else if (selectedvalue1 == "kilogram" && selectedvalue2 == "imperialton") {
      result = kgtoimperialton(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Imp. Ton<br>Formula:- 1 Imp. Ton = Kilogram / 1016.05`;
    } else if (selectedvalue1 == "imperialton" && selectedvalue2 == "kilogram") {
      result = imperialtontokg(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Kilogram<br>Formula:- 1 Kilogram = Imp. Ton * 1016.05`;
    } else if (selectedvalue1 == "kilogram" && selectedvalue2 == "uston") {
      result = kgtouston(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} US Ton<br>Formula:- 1 US Ton = Kilogram / 907.185`;
    } else if (selectedvalue1 == "uston" && selectedvalue2 == "kilogram") {
      result = ustontokg(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Kilogram<br>Formula:- 1 Kilogram = US Ton * 907.185`;
    } else if (selectedvalue1 == "gram" && selectedvalue2 == "imperialton") {
      result = gtoimperialton(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Imp. Ton<br>Formula:- 1 Imp. Ton = Gram / 1.016e+6`;
    } else if (selectedvalue1 == "imperialton" && selectedvalue2 == "gram") {
      result = imperialtontog(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Gram<br>Formula:- 1 Gram = Imp. Ton * 1.016e+6`;
    } else if (selectedvalue1 == "gram" && selectedvalue2 == "uston") {
      result = gtouston(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} US Ton<br>Formula:- 1 US Ton = Gram / 907185`;
    } else if (selectedvalue1 == "uston" && selectedvalue2 == "gram") {
      result = ustontog(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Gram<br>Formula:- 1 Gram = US Ton * 907185`;
    } else if (selectedvalue1 == "pound" && selectedvalue2 == "gram") {
      result = poundtog(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Gram<br>Formula:- 1 Gram = Pound * 453.592`;
    } else if (selectedvalue1 == "gram" && selectedvalue2 == "pound") {
      result = gtopound(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Pound<br>Formula:- 1 Pound = Gram * 0.00220462`;
    } else if (selectedvalue1 == "pound" && selectedvalue2 == "uston") {
      result = poundtouston(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} US Ton<br>Formula:- 1 US Ton = Pound / 2000`;
    } else if (selectedvalue1 == "uston" && selectedvalue2 == "pound") {
      result = ustontopound(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Pound<br>Formula:- 1 Pound = US Ton * 2000`;
    } else if (selectedvalue1 == "pound" && selectedvalue2 == "imperialton") {
      result = poundtoimperialton(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Imperial Ton<br>Formula:- 1 Pound = Imp. Ton / 2240`;
    } else if (selectedvalue1 == "imperialton" && selectedvalue2 == "pound") {
      result = imperialtontopound(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Pound<br>Formula:- 1 Imp. Ton = Pound * 2240`;
    } else if (selectedvalue1 == "imperialton" && selectedvalue2 == "uston") {
      result = imperialtontouston(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} US Ton<br>Formula:- 1 US Ton = Imp. Ton * 1.12`;
    } else if (selectedvalue1 == "uston" && selectedvalue2 == "imperialton") {
      result = ustontoimperialton(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Imperial Ton<br>Formula:- 1 Imp. Ton = US Ton / 1.12`;
    } else if (selectedvalue1 == "uston" && selectedvalue2 == "tonne") {
      result = ustontotonne(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Tonne<br>Formula:- 1 Tonne = US Ton / 1.10231`;
    } else if (selectedvalue1 == "tonne" && selectedvalue2 == "uston") {
      result = tonnetouston(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} US Ton<br>Formula:- 1 US Ton = Tonne * 1.10231`;
    } else if (selectedvalue1 == "tonne" && selectedvalue2 == "imperialton") {
      result = tonnetoimperialton(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Imperial Ton<br>Formula:- 1 Imp. Ton = Tonne / 1.016`;
    } else if (selectedvalue1 == "imperialton" && selectedvalue2 == "tonne") {
      result = imperialtontotonne(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Tonne<br>Formula:- 1 Tonne = Imp. Ton * 1.016`;
    } else if (selectedvalue1 == "stone" && selectedvalue2 == "kilogram") {
      result = stonetokilogram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Kilogram<br>Formula:- 1 Kilogram = Stone * 6.35029`;
    } else if (selectedvalue1 == "kilogram" && selectedvalue2 == "stone") {
      result = kilogramtostone(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Stone</S><br>Formula:- 1 Stone = Kilogram / 6.35029`;
    } else if (selectedvalue1 == "stone" && selectedvalue2 == "gram") {
      result = stonetogram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Gram</S><br>Formula:- 1 Gram = Stone * 6350.29`;
    } else if (selectedvalue1 == "gram" && selectedvalue2 == "stone") {
      result = gramtostone(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Stone</S><br>Formula:- 1 Stone = Gram / 6350.29`;
    } else if (selectedvalue1 == "tonne" && selectedvalue2 == "stone") {
      result = tonnetostone(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Stone</S><br>Formula:- 1 Stone = Tonne * 157.473`;
    } else if (selectedvalue1 == "stone" && selectedvalue2 == "tonne") {
      result = stonetotonne(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Tonne</S><br>Formula:- 1 Tonne = Stone / 157.473`;
    } else if (selectedvalue1 == "imperialton" && selectedvalue2 == "stone") {
      result = imperialtontostone(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Stone</S><br>Formula:- 1 Stone = Imp. Tonne * 160`;
    } else if (selectedvalue1 == "stone" && selectedvalue2 == "imperialton") {
      result = stonetoimperialton(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Imp. Tonne</S><br>Formula:- 1 Imp. Tonne = Stone / 160`;
    } else if (selectedvalue1 == "uston" && selectedvalue2 == "stone") {
      result = ustontostone(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Stone</S><br>Formula:- 1 Stone = US Ton * 142.857`;
    } else if (selectedvalue1 == "stone" && selectedvalue2 == "uston") {
      result = stonetouston(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} US Ton</S><br>Formula:- 1 US Ton = Stone / 142.857`;
    } else if (selectedvalue1 == "stone" && selectedvalue2 == "pound") {
      result = stonetopound(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Pound</S><br>Formula:- 1 Pound = Stone * 14`;
    } else if (selectedvalue1 == "pound" && selectedvalue2 == "stone") {
      result = poundtostone(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Stone</S><br>Formula:- 1 Stone = Pound / 14`;
    } else if (selectedvalue1 == "kilogram" && selectedvalue2 == "ounce") {
      result = kilogramtoounce(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Ounce</S><br>Formula:- 1 Ounce = Kilogram * 35.274`;
    } else if (selectedvalue1 == "ounce" && selectedvalue2 == "kilogram") {
      result = ouncetokilogram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Kilogram</S><br>Formula:- 1 Kilogram = Ounce / 35.274`;
    } else if (selectedvalue1 == "ounce" && selectedvalue2 == "tonne") {
      result = ouncetotonne(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Tonne</S><br>Formula:- 1 Tonne = Ounce / 35274`;
    } else if (selectedvalue1 == "tonne" && selectedvalue2 == "ounce") {
      result = tonnetoounce(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Ounce</S><br>Formula:- 1 Ounce = Tonne * 35274`;
    } else if (selectedvalue1 == "ounce" && selectedvalue2 == "gram") {
      result = ouncetogram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Gram</S><br>Formula:- 1 Gram = Ounce * 28.3495`;
    } else if (selectedvalue1 == "gram" && selectedvalue2 == "ounce") {
      result = gramtoounce(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Ounce</S><br>Formula:- 1 Ounce = Gram / 28.3495`;
    } else if (selectedvalue1 == "ounce" && selectedvalue2 == "uston") {
      result = ouncetouston(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} US Ton</S><br>Formula:- 1 US Ton = Ounce / 32000`;
    } else if (selectedvalue1 == "uston" && selectedvalue2 == "ounce") {
      result = ustontoounce(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Ounce</S><br>Formula:- 1 Ounce = US Ton * 32000`;
    } else if (selectedvalue1 == "ounce" && selectedvalue2 == "imperialton") {
      result = ouncetoimperialton(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Imp. Ton</S><br>Formula:- 1 Imp. Ton = Ounce / 35840`;
    } else if (selectedvalue1 == "imperialton" && selectedvalue2 == "ounce") {
      result = imperialtontoounce(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Ounce</S><br>Formula:- 1 Ounce = Imp. Ton * 35840`;
    } else if (selectedvalue1 == "ounce" && selectedvalue2 == "pound") {
      result = ouncetopound(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Pound</S><br>Formula:- 1 Pound = Ounce / 16`;
    } else if (selectedvalue1 == "pound" && selectedvalue2 == "ounce") {
      result = poundtoounce(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Ounce</S><br>Formula:- 1 Ounce = Pound * 16`;
    } else if (selectedvalue1 == "ounce" && selectedvalue2 == "stone") {
      result = ouncetostone(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Stone</S><br>Formula:- 1 Stone = Ounce / 224`;
    } else if (selectedvalue1 == "stone" && selectedvalue2 == "ounce") {
      result = stonetoounce(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Ounce</S><br>Formula:- 1 Ounce = Stone * 224`;
    } else if (selectedvalue1 == "milligram" && selectedvalue2 == "kilogram") {
      result = milligramtokg(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Kilogram</S><br>Formula:- 1 Kilogram = Milligram / 1e+6`;
    } else if (selectedvalue1 == "kilogram" && selectedvalue2 == "milligram") {
      result = kgtomilligram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Milligram</S><br>Formula:- 1 Milligram = Kilogram * 1e+6`;
    } else if (selectedvalue1 == "milligram" && selectedvalue2 == "tonne") {
      result = milligramtotonne(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Tonne</S><br>Formula:- 1 Tonne = Milligram / 1e+9`;
    } else if (selectedvalue1 == "tonne" && selectedvalue2 == "milligram") {
      result = tonnetomilligram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Milligram</S><br>Formula:- 1 Milligram = Tonne * 1e+9`;
    } else if (selectedvalue1 == "milligram" && selectedvalue2 == "gram") {
      result = milligramtog(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Milligram</S><br>Formula:- 1 Milligram = Gram / 1000`;
    } else if (selectedvalue1 == "gram" && selectedvalue2 == "milligram") {
      result = gtomilligram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Milligram</S><br>Formula:- 1 Gram = Milligram * 1000`;
    } else if (selectedvalue1 == "milligram" && selectedvalue2 == "microgram") {
      result = milligramtomicrogram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Microgram</S><br>Formula:- 1 Microgram = Milligram * 1000`;
    } else if (selectedvalue1 == "microgram" && selectedvalue2 == "milligram") {
      result = microgramtomilligram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Milligram</S><br>Formula:- 1 Milligram = Microgram / 1000`;
    } else if (selectedvalue1 == "milligram" && selectedvalue2 == "uston") {
      result = milligramtouston(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} US Ton</S><br>Formula:- 1 US Ton = Milligram / 9.072e+8`;
    } else if (selectedvalue1 == "uston" && selectedvalue2 == "milligram") {
      result = ustontomilligram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Milligram</S><br>Formula:- 1 Milligram = US Ton * 9.072e+8`;
    } else if (selectedvalue1 == "milligram" && selectedvalue2 == "imperialton") {
      result = milligramtoimperialton(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Imp. Ton</S><br>Formula:- 1 Imp. Ton = Milligram / 1.016e+9`;
    } else if (selectedvalue1 == "imperialton" && selectedvalue2 == "milligram") {
      result = imperialtontomilligram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Milligram</S><br>Formula:- 1 Milligram = Imp. Ton * 1.016e+9`;
    } else if (selectedvalue1 == "milligram" && selectedvalue2 == "pound") {
      result = milligramtopound(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Pound</S><br>Formula:- 1 Pound = Milligram / 453600`;
    } else if (selectedvalue1 == "pound" && selectedvalue2 == "milligram") {
      result = poundtomilligram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Milligram</S><br>Formula:- 1 Milligram = Pound * 453600`;
    } else if (selectedvalue1 == "milligram" && selectedvalue2 == "stone") {
      result = milligramtostone(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Stone</S><br>Formula:- 1 Stone = Milligram / 6.35e+6`;
    } else if (selectedvalue1 == "stone" && selectedvalue2 == "milligram") {
      result = stonetomilligram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Milligram</S><br>Formula:- 1 Milligram = Stone * 6.35e+6`;
    } else if (selectedvalue1 == "milligram" && selectedvalue2 == "ounce") {
      result = milligramtoounce(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Ounce</S><br>Formula:- 1 Ounce = Milligram / 28350`;
    } else if (selectedvalue1 == "ounce" && selectedvalue2 == "milligram") {
      result = ouncetomilligram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Milligram</S><br>Formula:- 1 Milligram = Ounce * 28350`;
    } else if (selectedvalue1 == "microgram" && selectedvalue2 == "kilogram") {
      result = microgramtokg(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Kilogram</S><br>Formula:- 1 Kilogram = Microgram / 1e+9`;
    } else if (selectedvalue1 == "Kilogram" && selectedvalue2 == "microgram") {
      result = kgtomicrogram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Microgram</S><br>Formula:- 1 Microgram = Kilogram * 1e+9`;
    } else if (selectedvalue1 == "microgram" && selectedvalue2 == "tonne") {
      result = microgramtotonne(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Tonne</S><br>Formula:- 1 Tonne = Microgram / 1e+12`;
    } else if (selectedvalue1 == "tonne" && selectedvalue2 == "microgram") {
      result = tonnetomicrogram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Microgram</S><br>Formula:- 1 Microgram = Tonne * 1e+12`;
    } else if (selectedvalue1 == "microgram" && selectedvalue2 == "gram") {
      result = microgramtog(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Gram</S><br>Formula:- 1 Gram = Microgram / 1e+6`;
    } else if (selectedvalue1 == "gram" && selectedvalue2 == "microgram") {
      result = gtomicrogram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Microgram</S><br>Formula:- 1 Microgram = Gram * 1e+6`;
    } else if (selectedvalue1 == "microgram" && selectedvalue2 == "uston") {
      result = microgramtouston(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} US Ton</S><br>Formula:- 1 US Ton = Microgram / 9.072e+11`;
    } else if (selectedvalue1 == "uston" && selectedvalue2 == "microgram") {
      result = ustontomicrogram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Microgram</S><br>Formula:- 1 Microgram = US Ton * 9.072e+11`;
    } else if (selectedvalue1 == "microgram" && selectedvalue2 == "imperialton") {
      result = microgramtoimperialton(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Imp. Ton</S><br>Formula:- 1 Imp. Ton = Microgram / 1.016e+12`;
    } else if (selectedvalue1 == "imperialton" && selectedvalue2 == "microgram") {
      result = imperialtontomicrogram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Microgram</S><br>Formula:- 1 Microgram = Imp. Ton * 1.016e+12`;
    } else if (selectedvalue1 == "microgram" && selectedvalue2 == "pound") {
      result = microgramtopound(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Pound</S><br>Formula:- 1 Pound = Microgram / 4.536e+8`;
    } else if (selectedvalue1 == "pound" && selectedvalue2 == "microgram") {
      result = poundtomicrogram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Microgram</S><br>Formula:- 1 Microgram = Pound * 4.536e+8`;
    } else if (selectedvalue1 == "microgram" && selectedvalue2 == "stone") {
      result = microgramtostone(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Stone</S><br>Formula:- 1 Stone = Microgram / 6.35e+9`;
    } else if (selectedvalue1 == "stone" && selectedvalue2 == "microgram") {
      result = stonetomicrogram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Microgram</S><br>Formula:- 1 Microgram = Stone * 6.35e+9`;
    } else if (selectedvalue1 == "microgram" && selectedvalue2 == "ounce") {
      result = microgramtoounce(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Ounce</S><br>Formula:- 1 Ounce = Microgram / 2.835e+7`;
    } else if (selectedvalue1 == "ounce" && selectedvalue2 == "microgram") {
      result = ouncetomicrogram(number);
      document.getElementById("resultcontainer").innerHTML =
        `= ${result} Microgram</S><br>Formula:- 1 Microgram = Ounce * 2.835e+7`;
    }
    else{
      document.getElementById("resultcontainer").innerHTML =
        `<span>&#128540;</span>Oops! Same units can't be calculated.`;
    }
  };