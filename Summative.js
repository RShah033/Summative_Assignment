/**  
 * Tasks:
 * - Development: Demonstrate skills in and use of:
o control statements
o objects and functions
o DOM
o visualisations/graphics - D3 and SVG
o embedding/importing data from JSON/CSV
o HTML+CSS (compliant with HTML5)
o website development tools, e.g. Bootstrap framework
*/


/**Class represting the Temperatures over several years*/
class Temperature{
    /**
        * Create a piece of data.
        * @param {string} Year - the year value
        * @param {string} Temp - the temperature value for the given year from the year value
    */
    
     constructor(Year, Temp) {
       
        this.Year = Year;
        this.Temp = Temp;
    }

    /**
     * Get the year value.
     * @return {Year} The year value
     * @return {Temp} The temperature value 
     */
    output(){
        console.log("The year(s) is/are: " + this.Year);
        console.log("The temperature is: " + this.Temp + " degrees Celcius");
    }
}
/**Class used to define several objects. These objects represent the different years and average annual temperatures, which have also been included in the csv file.*/
let temperature1 = new Temperature("1969-1990", "9.47");
let temperature2 = new Temperature("1991", "10.63");
let temperature3 = new Temperature("1992", "9.52");
let temperature4 = new Temperature("1993", "9.86");
let temperature5 = new Temperature("1994", "9.49");
let temperature6 = new Temperature("1995", "10.24");
let temperature7 = new Temperature("1996", "10.52");
let temperature8 = new Temperature("1997", "9.2");
let temperature9 = new Temperature("1998", "10.53");
let temperature10 = new Temperature("1999", "10.34");
let temperature11 = new Temperature("2000", "10.63");
let temperature12 = new Temperature("2001", "9.93");
let temperature13 = new Temperature("2002", "10.6");


/**
 * This code has been placed in to make sure that the correct information is output to the console when it is required. This has been checked and is successful.
 * */
temperature1.output();




/**
 * Class representing the average Precipitation over several years
 * */
class Precipitation{
    /**
        * Create a piece of data.
        * @param {string} Year2 - the year value
        * @param {string} Precip - the temperature value for the given year
    */
    constructor(Year2, Precip) {
        this.Year2 = Year2;
        this.Precip = Precip;
    }

    show(){
        console.log("The year(s) is/are: " + this.Year2);
        console.log("The level of annual precipitation is: " + this.Precip + " mm");
    }
}
/**Class used to define several objects. These are for the different years and the average annual rainfall that takes place*/
let precip1 = new Precipitation("1969-1990", "912");
let precip2 = new Precipitation("1991", "801.8");
let precip3 = new Precipitation("1992", "979.7");
let precip4 = new Precipitation("1993", "1013.3");
let precip5 = new Precipitation("1994", "1050");
let precip6 = new Precipitation("1995", "840.7");
let precip7 = new Precipitation("1996", "766.4");
let precip8 = new Precipitation("1997", "854");
let precip9 = new Precipitation("1998", "1062.6");
let precip10 = new Precipitation("1999", "1036.1");
let precip11 = new Precipitation("2000", "1232.5");
let precip12 = new Precipitation("2001", "970.1");
let precip13 = new Precipitation("2002", "1117.8");


/**This code has been placed in to make sure that the correct information is output to the console when it is required. This has been checked and is successful
 * we can check this for all elements in each class - either Temperature or Precipitation
*/
precip2.show();

