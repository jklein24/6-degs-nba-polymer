Polymer('player-path', {
  /**
   * The data for this path including players and connection details.
   *
   * @attribute data
   * @type Oject
   */
  data: '',

  publish: {
    showteams: {
      value: true,
      reflect: true
    }
  },

  ready: function() {
    this.teamMap = {
      'AKF': "Akron Firestone Non-Skids",
      'AKG': "Akron Goodyear Wingfoots",
      'ANA': "Anaheim Amigos",
      'AND': "Anderson Duffey Packers/Anderson Packers",
      'ATC': "Atlanta Crackers",
      'ATG': "Atlanta Glory",
      'ATL': "Atlanta Hawks",
      'BAC': "Baltimore Claws",
      'BAL': "Baltimore Bullets",
      'BFB': "Buffalo Bisons",
      'BFG': "Buffalo Germans",
      'BIR': "Birmingham Skyhawks",
      'BKA': "Brooklyn Arcadians",
      'BKC': "Brooklyn Celtics",
      'BKV': "Brooklyn Visitations",
      'BLB': "Baltimore Bullets",
      'BOS': "Boston Celtics",
      'BSW': "Boston Whirlwinds",
      'BTO': "Baltimore Orioles",
      'BUF': "Buffalo Braves",
      'CAD': "California Dreams",
      'CAP': "Capital Bullets",
      'CAR': "Carolina Cougars",
      'CCO': "Chicago Condors",
      'CHA': "Charlotte Hornets",
      'CHN': "Charlotte Bobcats",
      'CHB': "Chicago Bruins",
      'CHG': "Chicago American Gears/Chicago Gears",
      'CHH': "Chicago Hustle",
      'CHI': "Chicago Bulls",
      'CHM': "Chicago Majors",
      'CHO': "Chicago Bruins",
      'CHP': "Chicago Packers/Zephyrs",
      'CHR': "Charlotte Sting",
      'CHS': "Chicago Stags",
      'CHT': "Chattanooga Majors",
      'CIN': "Cincinnati Royals",
      'CLA': "Cleveland Allmen Transfers",
      'CLC': "Cleveland Chase Brass",
      'CLE': "Cleveland Cavaliers",
      'CLP': "Cleveland Pipers",
      'CLR': "Cleveland Rebels",
      'CLW': "Cleveland White Horses",
      'COL': "Coumbus Athletic Supply",
      'COQ': "Columbus Quest",
      'COX': "Colorado Explosion",
      'CRK': "Cleveland Rockers",
      'CRO': "Cleveland Rosenblums",
      'CSF': "Chicago Studebaker Flyers",
      'DAL': "Dallas Mavericks",
      'DEN': "Denver Rockets/Nuggets",
      'DET': "Detroit Pistons",
      'DLC': "Dallas Chaparrals",
      'DLD': "Dallas Diamonds",
      'DNV': "Denver Nuggets",
      'DPP': "Detroit Pulaski Post Five",
      'DRO': "Dayton Rockettes",
      'DTC': "Detroit Cardinals",
      'DTE': "Detroit Eagles",
      'DTF': "Detroit Falcons",
      'DTG': "Detroit Gems",
      'DTL': "Detroit Lions",
      'DTS': "Detroit Shock",
      'DTV': "Detroit Vagabond Kings",
      'DYM': "Dayton Metros",
      'DYR': "Dayton Rens",
      'ELP': "East Liverpool Panthers",
      'EVN': "Evansville Agogans",
      'FLA': "The Floridians",
      'FTG': "Fort Wayne General Electrics",
      'FTW': "Fort Wayne Zollner Pistons/Fort Wayne Pistons",
      'FWC': "Fort Wayne Caseys",
      'FWH': "Fort Wayne Hoosiers",
      'GRH': "Grand Rapids Hornets",
      'GRR': "Grand Rapids Rangers",
      'GST': "Golden State Warriors",
      'GSW': "Golden State Warriors",
      'HAW': "Hawaii Chiefs",
      'HCA': "Hammond Ciesar All-Americans",
      'HCB': "Hammond Calumet Buccaneers",
      'HOU': "Houston Rockets",
      'HSM': "Houston Mavericks",
      'HST': "Houston Mavericks",
      'HTA': "Houston Angels",
      'HTC': "Houston Comets",
      'IND': "Indiana Pacers",
      'INJ': "Indianapolis Kautskys/Indianapolis Jets",
      'INO': "Indianapolis Olympians",
      'IOW': "Iowa Cornets",
      'KAN': "Kankakee Gallagher Trojans",
      'KCB': "Kansas City Blues",
      'KCH': "Kansas City Hi-Spots",
      'KCK': "Kansas City Kings",
      'KCO': "Kansas City-Omaha Kings",
      'KCS': "Kansas City Steers",
      'KEN': "Kentucky Colonels",
      'LAC': "Los Angeles Clippers",
      'LAJ': "Los Angeles Jets",
      'LAL': "Los Angeles Lakers",
      'LAS': "Los Angeles Stars",
      'LBC': "Long Beach Chiefs",
      'LBS': "Long Beach Stingrays",
      'LOC': "Louisville Colonels",
      'LOU': "Louisville Alumnites",
      'LSP': "Los Angeles Sparks",
      'MEG': "Memphis Grizzlies",
      'MEM': "Memphis Pros/Memphis Tams/Memphis Sounds",
      'MFD': "Midland Dow A.C.'s/Flint Dow A.C.'s",
      'MIA': "Miami Heat",
      'MIF': "Miami Floridians",
      'MIL': "Milwaukee Bucks",
      'MIN': "Minnesota Timberwolves",
      'MLD': "Milwaukee Does",
      'MLH': "Milwaukee Hawks",
      'MNF': "Minnesota Fillies",
      'MNL': "Minnesota Lynx",
      'MNM': "Minnesota Muskies",
      'MNP': "Minnesota Pipers",
      'MPL': "Minneapolis Lakers",
      'NBW': "Nebraska Wranglers",
      'NEB': "New England Blizzard",
      'NEG': "New England Gulls",
      'NJA': "New Jersey Americans",
      'NJN': "New Jersey Nets",
      'NOB': "New Orleans Buccaneers",
      'NOH': "New Orleans Hornets",
      'NOK': "New Orleans/Oklahoma City Hornets",
      'NOP': "New Orleans Pride",
      'NOR': "New Orleans Jazz",
      'NSH': "Nashville Noise",
      'NYC': "New York Celtics",
      'NYG': "New Jersey Gems",
      'NYH': "New York Hakoahs",
      'NYK': "New York Knicks",
      'NYL': "New York Liberty",
      'NYN': "New York Nets",
      'NYS': "New York Stars",
      'OAK': "Oakland Oaks",
      'OKD': "Oklahoma City Drillers",
      'OKO': "Oakland Oaks",
      'OMA': "Omaha Tomahawks",
      'ORL': "Orlando Magic",
      'ORM': "Orlando Miracle",
      'OSH': "Oshkosh All-Americans",
      'PAC': "Paterson Crescents",
      'PAW': "Paterson Whirlwinds",
      'PHF': "Philadelphia Fox",
      'PHI': "Philadelphia 76ers",
      'PHM': "Phoenix Mercury",
      'PHO': "Phoenix Suns",
      'PHP': "Philadelphia Phillies",
      'PHR': "Philadelphia Rage",
      'PHT': "Philadelphia Tapers",
      'PHW': "Philadelphia Warriors",
      'PHX': "Phoenix Suns",
      'PIT': "Pittsburgh Ironmen",
      'POR': "Portland Trailblazers",
      'PRN': "Pittsburgh Rens",
      'PRO': "Providence Steamrollers",
      'PRT': "Portland Power",
      'PTC': "Pittsburgh Pipers/Pittsburgh Condors",
      'PTP': "Pittsburgh Pirates",
      'PTR': "Pittsburgh Raiders",
      'PWA': "Philadelphia Warriors",
      'RCC': "Richmond King Clothiers/Cincinnati Comellos",
      'RCH': "Rochester Centrals",
      'RIR': "Richmond Rage",
      'ROC': "Rochester Royals",
      'SAA': "Syracuse All-Americans",
      'SAC': "Sacramento Kings",
      'SAM': "Sacramento Monarchs",
      'SAN': "San Antonio Spurs",
      'SDC': "San Diego Clippers",
      'SDR': "San Diego Rockets",
      'SDS': "San Diego Conquistadors/Sails",
      'SEA': "Seattle Supersonics",
      'SER': "Seattle Reign",
      'SFP': "San Francisco Pioneers",
      'SFS': "San Francisco Saints",
      'SFW': "San Francisco Warriors",
      'SHE': "Sheboygan Redskins",
      'SJL': "San Jose Lasers",
      'SJO': "St. Joseph Outlaws",
      'SLB': "St. Louis Bombers",
      'SLS': "St. Louis Streak",
      'SPL': "St. Paul Lights",
      'SPR': "Springfield Squires",
      'SPS': "St. Paul Saints",
      'SST': "Spirits of St. Louis",
      'STL': "St. Louis Hawks",
      'SYR': "Syracuse Nationals",
      'TEX': "Texas Chaparrals",
      'TLC': "Toledo Jim White Chevrolets",
      'TLJ': "Toledo Jeeps",
      'TOR': "Toronto Raptors",
      'TRE': "Trenton Bengals",
      'TRH': "Toronto Huskies",
      'TRI': "Tri-City Blackhawks/Tri-Cities Blackhawks",
      'TRM': "Toledo Red Man Tobaccos",
      'TUL': "Tulsa Rangers",
      'USZ': "Utah Starzz",
      'UTA': "Utah Jazz",
      'UTS': "Utah Stars",
      'VAN': "Vancouver Grizzlies",
      'VIR': "Virginia Squires",
      'WAM': "Washington Metros",
      'WAR': "Warren Penns",
      'WAS': "Washington Bullets/Wizards",
      'WAT': "Waterloo Hawks",
      'WCA': "Whiting Ciesar All-Americans",
      'WNY': "Washington Taper/New York Tapers",
      'WPF': "Washington Palace Five",
      'WSC': "Washington Capitals",
      'WSH': "Washington Caps",
      'WSM': "Washington Mystics",
      'WTP': "Waterloo Pro-Hawks",
      'YNG': "Youngstown Bears",
    };
  },
  
  dataChanged: function() {
    this.connectionTeams = [];
    for (var i in this.data) {
      this.connectionTeams.push(this.getReadableTeams(this.data[i].teams));
    }
  },

  getReadableTeams: function(teamString) {
    var teams = teamString.split("#").slice(0, -1);
    var result = "";
    for (var i in teams) {
      result += this.teamMap[teams[i].substr(0, 3)] + " (" + teams[i].substr(4) + "), ";
    }
    return result.slice(0, -2);
  },

  capitalize: function(playerName) {
    var pieces = playerName.split(" ");
    for (var i = 0; i < pieces.length; i++) {
      var j = pieces[i].charAt(0).toUpperCase();
      pieces[i] = j + pieces[i].substr(1);
    }
    return pieces.join(" ");
  },

});
