# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Minerva Paulet**

Time spent: **30+ hours but time resetted and now says 13** hours spent in total

Link to project: (https://light-and-sound-game-mp.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

* [Y] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [Y] "Start" button toggles between "Start" and "Stop" when clicked. 
* [Y] Game buttons each light up and play a sound when clicked. 
* [Y] Computer plays back sequence of clues including sound and visual cue for each button
* [Y] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [Y] User wins the game after guessing a complete pattern
* [Y] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [Y] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [Y] Buttons use a pitch (frequency) other than the ones in the tutorial
* [Y] More than 4 functional game buttons
* [Y] Playback speeds up on each turn
* [Y] Computer picks a different pattern each time the game is played
* [Y] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [Y/N] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![1](https://recordit.co/hJjzf64OJX)
![2](https://recordit.co/MmzSj928pU)
![3](https://recordit.co/uxcaiehuLG)
![4](https://recordit.co/aP6TpaPTcz)
![5](https://recordit.co/BngoYQ7yfm)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[The outside resources I used to help complete my submission were w3schools, stackoverflow, and the first suggestions of youtube videos on setInterval or clearInterval and javascript.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[A challenge I have encountered in creating this submission was trying to implement the timer. I managed to make the timer decrement every second (in my countDown() function). 
And in my startStop() function I made it start when the clock is true using the setInterval() function and stop using the clearInterval() function. I also made a resetClock() function
that clears the time of the timer and resets it back to the original time. The resetClock() function is called when the user clicks on the stop button. I wanted the startStop() function 
to start when a sequence has finished playing. And then the resetClock function to be called when the user has already finished with their guess. 
The first sequence that played was successful but after the second sequence played, it would glitch my timer and decrease the time faster than seconds. 
I spent several hours trying to fix it but I eventually decided to make it much simpler. I instead had the timer start when the game would start. 
So the timer would start even if the sequence of clues were playing. I of course added more time for the player.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[The questions I have after completing my submission are that while I had that problem with my timer giving me all sorts of problems, eventually I would fix the problem but then another error would occur. 
Debugging the code was incredibly difficult for a project this small. How can one go from debugging their code when it is a large project? I could only imagine how long that would take. 
Another question I have is how can one make an application without having to constantly refresh the page. For example, when I added the random pattern to my code, a new random pattern would not play when 
I played a second time. But then I decided to add an empty array pattern to my startGame() and it was only then that it would display a new pattern when I pressed the start button. This wouldn’t happen before unless 
I refreshed the page. I also wanted to do this with the amount of time a sequence of clues plays and they would decrement normally but when the game was over and I played again, the code would save the previous values 
from the last game and would play my clues faster. And I was not allowed to add the clueHoldTime a value in the startGame() function because it was a constant. The only way of solving this was to refresh the page. 
Is there any way around this?]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had more hours to work on this project, I would have spent them on the timer. My timer works perfectly fine, however I would have liked it to work out the way I initially wanted to as I explained in question 2. 
I also would have liked to add some original design or audio to my buttons. But most of all, I would have liked to make the code a little better. For example, when I would click one of the buttons while the sequence is playing, 
the game would glitch and start playing the buttons all over the place and make it difficult to see the sequence. A solution to this would have been to not let the user be able to click the buttons while the sequence is playing 
or have the program not register the click to avoid the glitch.]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/9b5d52bd641749de9d79edcef3b79ca0)


## License

    Copyright Minerva Paulet

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.