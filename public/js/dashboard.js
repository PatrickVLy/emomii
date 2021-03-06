var parentfeelings = document.getElementById("parentfeelings");
var childfeelings = document.getElementById("childfeelings");
var grandchildfeelings = document.getElementById("grandchildfeelings");
function populatechildren(parentfeelings, childfeelings) {
  childfeelings.innerHTML = "";
  if (parentfeelings.value == "Happy") {
    var optionArray = [
      "|",
      "playful|Playful",
      "content|Content",
      "interested|Interested",
      "proud|Proud",
      "accepted|Accepted",
      "powerful|Powerful",
      "peaceful|Peaceful",
      "trusting|Trusting",
      "optimistic|Optimistic",
    ];
  } else if (parentfeelings.value == "Sad") {
    var optionArray = [
      "|",
      "lonely|Lonely",
      "vunerable|Vunerable",
      "despair|Despair",
      "guilty|Guilty",
      "depressed|Depressed",
      "hurt|Hurt",
    ];
  } else if (parentfeelings.value == "Angry") {
    var optionArray = [
      "|",
      "letdown|Letdown",
      "humiliated|Humiliated",
      "bitter|Bitter",
      "mad|Mad",
      "aggressive|Aggressive",
      "frustrated|Frustrated",
      "distant|Distant",
      "critical|Critical",
    ];
  } else if (parentfeelings.value == "Surprised") {
    var optionArray = [
      "|",
      "startled|Startled",
      "confused|Confused",
      "amazed|Amazed",
      "excited|Excited",
    ];
  } else if (parentfeelings.value == "Bad") {
    var optionArray = [
      "|",
      "bored|Bored",
      "busy|Busy",
      "stressed|Stressed",
      "tired|Tired",
    ];
  } else if (parentfeelings.value == "Fearful") {
    var optionArray = [
      "|",
      "scared|Scared",
      "anxious|Anxious",
      "insecure|Insecure",
      "weak|Weak",
      "rejected|Rejected",
      "threatened|Threatened",
    ];
  } else if (parentfeelings.value == "Disgusted") {
    var optionArray = [
      "|",
      "disapproving|Disapproving",
      "disenchanted|Disenchanted",
      "awful|Awful",
      "repelled|Repelled",
    ];
  }
  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    childfeelings.options.add(newOption);
  }
}

function populategrandchildren(childfeelings, grandchildfeelings) {
  grandchildfeelings.innerHTML = "";
  if (childfeelings.value == "playful") {
    var optionArray = ["|", "aroused|Aroused", "cheeky|Cheeky"];
    console.log("you chose playful");
  } else if (childfeelings.value == "content") {
    var optionArray = ["|", "free|Free", "joyful|Joyful"];
  } else if (childfeelings.value == "interested") {
    var optionArray = ["|", "curious|Curious", "inquisitive|Inquisitive"];
  } else if (childfeelings.value == "proud") {
    var optionArray = ["|", "successful|Successful", "confident|Confident"];
  } else if (childfeelings.value == "accepted") {
    var optionArray = ["|", "respected|Respected", "valued|Valued"];
  } else if (childfeelings.value == "powerful") {
    var optionArray = ["|", "courageous|Courageous", "creative|Creative"];
  } else if (childfeelings.value == "peaceful") {
    var optionArray = ["|", "loving|Loving", "thankful|Thankful"];
  } else if (childfeelings.value == "trusting") {
    var optionArray = ["|", "sensitive|Sensitive", "intimate|Intimate"];
  } else if (childfeelings.value == "optimistic") {
    var optionArray = ["|", "hopeful|Hopeful", "inspired|Inspired"];
  } else if (childfeelings.value == "lonely") {
    var optionArray = ["|", "isolated|Isolated", "abandoned|Abandoned"];
  } else if (childfeelings.value == "vunerable") {
    var optionArray = ["|", "victimized|Victimized", "fragile|Fragile"];
  } else if (childfeelings.value == "despair") {
    var optionArray = ["|", "heartbroken|Heartbroken", "powerless|Powerless"];
  } else if (childfeelings.value == "guilty") {
    var optionArray = ["|", "ashamed|Ashamed", "remorseful|Remorseful"];
  } else if (childfeelings.value == "depressed") {
    var optionArray = ["|", "empty|Empty", "inferior|Inferior"];
  } else if (childfeelings.value == "hurt") {
    var optionArray = [
      "|",
      "embarassed|Embarassed",
      "disappointed|Disappointed",
    ];
  } else if (childfeelings.value == "letdown") {
    var optionArray = ["|", "betrayed|Betrayed", "resentful|Resentful"];
  } else if (childfeelings.value == "humiliated") {
    var optionArray = ["|", "disrespected|Disrespected", "ridiculed|Ridiculed"];
  } else if (childfeelings.value == "bitter") {
    var optionArray = ["|", "indignant|Indignant", "violated|Violated"];
  } else if (childfeelings.value == "mad") {
    var optionArray = ["|", "furious|Furious", "jealous|Jealous"];
  } else if (childfeelings.value == "aggressive") {
    var optionArray = ["|", "provoked|Provoked", "hostile|Hostile"];
  } else if (childfeelings.value == "frustrated") {
    var optionArray = ["|", "infuriated|Infuriated", "annoyed|Annoyed"];
  } else if (childfeelings.value == "distant") {
    var optionArray = ["|", "withdrawn|Withdrawn", "numb|Numb"];
  } else if (childfeelings.value == "critical") {
    var optionArray = ["|", "skeptical|Skeptical", "dismissive|Dismissive"];
  } else if (childfeelings.value == "startled") {
    var optionArray = ["|", "shocked|Shocked", "dismayed|Dismayed"];
  } else if (childfeelings.value == "confused") {
    var optionArray = [
      "|",
      "disillusioned|Dissillusioned",
      "perplexed|Perplexed",
    ];
  } else if (childfeelings.value == "amazed") {
    var optionArray = ["|", "astonished|Astonished", "awestruck|Awestruck"];
  } else if (childfeelings.value == "excited") {
    var optionArray = ["|", "eager|Eager", "energetic|Energetic"];
  } else if (childfeelings.value == "bored") {
    var optionArray = ["|", "indifferent|Indifferent", "apathetic|Apathetic"];
  } else if (childfeelings.value == "busy") {
    var optionArray = ["|", "pressured|Pressured", "rushed|Rushed"];
  } else if (childfeelings.value == "stressed") {
    var optionArray = [
      "|",
      "overwhelmed|Overwhelmed",
      "outofcontrol|Out of control",
    ];
  } else if (childfeelings.value == "tired") {
    var optionArray = ["|", "sleepy|Sleepy", "unfocused|Unfocused"];
  } else if (childfeelings.value == "scared") {
    var optionArray = ["|", "helpless|Helpless", "frightened|Frightened"];
  } else if (childfeelings.value == "anxious") {
    var optionArray = ["|", "stressed|Stressed", "worried|Worried"];
  } else if (childfeelings.value == "insecure") {
    var optionArray = ["|", "inadequate|Inadequate", "inferior|Inferior"];
  } else if (childfeelings.value == "weak") {
    var optionArray = [
      "|",
      "worthless|Worthless",
      "insignificant|Insignificant",
    ];
  } else if (childfeelings.value == "rejected") {
    var optionArray = ["|", "excluded|Excluded", "persecuted|Persecuted"];
  } else if (childfeelings.value == "threatened") {
    var optionArray = ["|", "nervous|Nervous", "exposed|Exposed"];
  } else if (childfeelings.value == "disapproving") {
    var optionArray = ["|", "judgemental|Judgemental", "embarassed|Embarassed"];
  } else if (childfeelings.value == "disenchanted") {
    var optionArray = ["|", "appaled|Appaled", "revolted|Revolted"];
  } else if (childfeelings.value == "awful") {
    var optionArray = ["|", "nauseated|Nauseated", "detestable|Detestable"];
  } else if (childfeelings.value == "repelled") {
    var optionArray = ["|", "horrified|Horrified", "hesitant|Hesitant"];
  }
  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    grandchildfeelings.options.add(newOption);
  }
}

const newPost = async (event) => {
  event.preventDefault();

  const parentMood = parentfeelings.value.trim();
  const childMood = childfeelings.value.trim();
  const grandChildMood = grandchildfeelings.value.trim();
  const entry = document.querySelector("#post-entry").value.trim();
  if (parentMood && childMood && grandChildMood && entry) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ parentMood, childMood, grandChildMood, entry }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create post");
    }
  }
};

const deletePost = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete post");
    }
  }
};

const getPostdata = async () => {
  

  fetch(`/api/posts`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      var emotions = {};

      for (i = 0; i < data.length; i++) {
        var emotion = data[i].parentMood;
console.log ("this is the emotions:"+emotion)
        if (emotion in emotions) {
          emotions[emotion]++;
        } else {
          emotions[emotion] = 1;
        }
      }
     
      console.log(emotions);
      renderChart(emotions);
      renderSecondChart(emotions);
    });
  
};

function updatePage(event) {
  window.location.reload;
  newPost(event);
  getPostdata(event);
}

getPostdata()

document.querySelector(".new-post-form").addEventListener("submit", newPost);

function renderChart(obj) {
  const data = {
    labels: [
      "Happy",
      "Sad",
      "Angry",
      "Surprised",
      "Bad",
      "Fearful",
      "Disgusted",
    ],

    datasets: [
      {
        label: "My First Dataset",
        data: [
          obj["Happy"],
          obj["Sad"],
          obj["Angry"],
          obj["Surprised"],
          obj["Bad"],
          obj["Fearful"],
          obj["Disgusted"],
        ],
        backgroundColor: [
          "rgb(245, 175, 153)",
          "rgb(77, 107, 126)",
          "rgb(224, 130, 131)",
          "rgb(93, 85, 104)",
          "rgb(107, 128, 155)",
          "rgb(181, 196, 193)",
          "rgb(116, 118, 135)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
  };

  const myChart = new Chart(document.getElementById("myChart"), config);
}

function renderSecondChart(obj) {
  const data = {
    labels: [
      "Happy",
      "Sad",
      "Angry",
      "Surprised",
      "Bad",
      "Fearful",
      "Disgusted",
    ],

    datasets: [
      {
        label: "moods",
        data: [
          obj["Happy"],
          obj["Sad"],
          obj["Angry"],
          obj["Surprised"],
          obj["Bad"],
          obj["Fearful"],
          obj["Disgusted"],
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  const myChart = new Chart(document.getElementById("mySecondChart"), config);
}

var postContainer = document.getElementById("posts");
