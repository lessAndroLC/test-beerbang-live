

async function fetchCSV(url) {
  try {
      const response = await fetch(url);
      const data = await response.text();
      console.log(data)
  } catch (error) {
      console.error('Error fetching CSV:', error);
  }
}

fetchCSV('./test.csv');

//parse('./test.csv')

const beers = [
  {name: "Lametus KELLER PILS", 
    type: "Keller Pils, 4,5%",
    format_30: "30 cl 4€",
    format_40: "​40 cl 5€",
    format_50: "50 cl 6€"
  },
  {name: "Lametus KELLER PILS", 
    type: "Keller Pils, 4,5%",
    format_30: "30 cl 4€",
    format_40: "​40 cl 5€",
    format_50: "50 cl 6€"
  },
  {name: "Lametus KELLER PILS", 
    type: "Keller Pils, 4,5%",
    format_30: "30 cl 4€",
    format_40: "​40 cl 5€",
    format_50: "50 cl 6€"
  },
  {name: "Lametus KELLER PILS", 
    type: "Keller Pils, 4,5%",
    format_30: "30 cl 4€",
    format_40: "​40 cl 5€",
    format_50: "50 cl 6€"
  },
  {name: "Carrobiolo MUNICH", 
    type: "WINE Barleywine, 13%",
    format_30: "30 cl 6€",
    format_40: "-",
    format_50: "-"
  },
]

beers.forEach(element => {
  $(`<div class="four wide column">
    <div class="ui card">
      <div class="content">
        <div class="header">${element.name}/div>
      </div>
      <div class="content">
        <h4 class="ui sub header">Activity</h4>
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="summary">
                 <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
              </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary">
                 <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
              </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary">
                 <a>Helen Troy</a> added two pictures
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extra content">
        <button class="ui button">Join Project</button>
      </div>
    </div>
  </div>`
  ).appendTo("#central-grid")
});

