## Final Assignment Process

### 1. Ideation

We explored 10 different ideas for the final project, then narrowed the ideas down to 5 > 3 > 1.
Here are my 10 ideas described in brief, starting with the top 3:
1. **Blood Test Results:** The main reason why I want to build a visualization tool is to help patients understand their test results without translation assistance from medical staff. Also, it could be a useful research tool for educational purposes. The most important visualization element that I want to include is a scale, which shows where the average area is. [Data Source](http://www.lls.org/managing-your-cancer/lab-and-imaging-tests/understanding-blood-counts).

2. **World Weapons Industry:** *“The U.S. has sold more weapons to other nations in the first half of fiscal year 2018 than it did
in all of fiscal year 2017” – Defense News.*

  The United States has a huge arms industry and weapons, military technology are manufactured and sold to other countries for mostly war purposes. Just recently Saudi Arabia paid 110 billion
dollars to the US for weapons and military equipments. Other countries like Australia import weapons from the US. Australia pays nearly 2-158 million dollars every year for weapons.

  A data visualization of the US weapons sales specifically  will show:
  - How much the other countries benefit from importing weapons.
  - What are the countries.
  - How much the US is making out of weapons manufacturing.

  The visualization could be map that shows the top countries that are most active in selling and buying weapons. Or it could be a scatter chart that shows wars activity vs weapons industry activity.
[Idea Sketch]() | [Data Source](https://tradingeconomics.com/united-states/weapons-sales.).

3. **Hajj Pilgrimage:** Hajj is an annual Islamic pilgrimage practiced by millions of people in one small city, Mecca. Every year around 2 million people travel from all over the world to Mecca for Hajj. A huge number with different nationalities and ages, make an interesting set of data that can be visualized. Visualization can help answering important questions about Hajj:

  - How many people came from outside of Saudi Arabia this year, and in the past 10 years?
  - What are the countries that people usually travel from?
  - What is the country that most people travel from for Hajj?
  - What is the number of females vs males?
  - How did the Saudis travel domestically to get to Mecca?

This can be visualized diagrammatically or geospatially.
Diagrammatically: e.g., the increase or decrease of number of people from a certain country, female vs males.
Geospatially: e.g., show where Mecca is located and the distance between the other countries people travel from, the routes that are taken to travel. [Idea Sketch]() | [Data Source](https://hajmap.stats.gov.sa/hajmap/dayseng.asp).

4. **World Current Temperature** around the world: Although it might sounds like a "regular" idea, what global warming is doing now to the weather is scary, and if we could see all the temperatures around the world in one place it would make it easier to answer questions about climate change. [Data Source](https://www.timeanddate.com/weather/).

5. **Extend the earthquake project:** I enjoyed working on the earthquake project so much, and I am interested in expanding it by adding more data and filtering options, showing relationship between S and P waves and o–zone layer. [Data Source](https://ozonewatch.gsfc.nasa.gov/).

6. Airplanes routes between the biggest airports around the world.

7. Bike assembly infographic poster.

8. Mail carrier tracking number, visualize the route, the history.

9. Number of car accidents every day in Riyadh, Saudi Arabia.

10. The new metro system in Riyadh.


### 2. Implementation
I went with the first idea, visualizing blood test results, I used a little bit of [d3](http://bl.ocks.org/nbremer/21746a9668ffdf6d8242) for the radar chart, and CSS and JS for the other elements.

I started with sketching out ideas (sketches are in Sketches folder), I knew that I wanted to use a scale to show all the results together, so I went with the radar/spider chart because I thought the circular form would hold more data than other charts. Then I standardized all the indicators so they can all be comparable.
```javascript
function rescaling(input, min, avg_min, avg_max, max){
	if (input >= min &&  input < avg_min){
		var scale = d3.scale.linear().domain([min, avg_min]).range([0, 0.3])
		return scale(input)

	} else if (input >= avg_min &&  input <= avg_max){
		var scale = d3.scale.linear().domain([avg_min, avg_max]).range([0.3, 0.7])
		return scale(input)

	} else if (input > avg_max &&  input <= max){
		var scale = d3.scale.linear().domain([avg_max, max]).range([0.7, 1])
		return scale(input)

	} else {
		return 0;
	}
}
```
In the right side, I added a scrolling window that includes more information about the test. All the groups are color coded, and the normal range is in grey. 

I am looking forward to improving this as I think it could be a useful tool for medical purposes. I want to add a history feature so all the results can be gathered in one place for comparison, I also want to add more indicators and other types of diagrams.
