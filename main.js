import "./styles/style.scss";
import './styles/reset.scss'

let isMobile = false;

document.querySelector("#app").innerHTML = `
<nav>
<ul>
  <li>About</li>
  <li>Discover</li>
  <li>Get Started</li>
</ul>
</nav>
<main>
<header>
  <!-- Background image (product image) -->
</header>
<section class="crowdfund-header">
  <h1>Mastercraft Bamboo Monitor Riser</h1>
  <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
  <div class="flex-between">
    <button class="btn">Back this project</button>
    <label for="bookmark">Bookmark</label>
    <input id="bookmark" type="checkbox">
  </div>
</section>
<section class="crowdfund-statistics">
  <div>
    <p>$89,914 <span>of $100,000 backed</span></p>
    <p>5,007 total backers</p>
    <p>56 days left</p>
  </div>
  <div class="progress-bar"></div>
</section>
<section class="crowdfund-details">
  <h2>About this project</h2>
  <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more
    comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make
    you more comfortable while at work, helping you stay focused on the task at hand.</p>
  <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow
    notepads, pens, and USB sticks to be stored under the stand.</p>
  <section class="contribution-cards">
    <div class="card">
      <div class="card-header">
        <h3>Bamboo Stand</h3>
        <p>Pledge $25 or more</p>
      </div>
      <p> You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
        you’ll be added to a special Backer member list.</p>
      <div class="flex-between">
        <p>101 <span>left</span></p>
        <button class="btn">Select Reward</button>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h3>Black Edition Stand</h3>
        <p>Pledge $75 or more</p>
      </div>
      <p> You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
        member list. Shipping is included.</p>
      <div class="flex-between">
        <p>64 <span>left</span></p>
        <button class="btn">Select Reward</button>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h3>Mahogany Special Edition</h3>
        <p>Pledge $200 or more</p>
      </div>
      <p> You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
        to our Backer member list. Shipping is included.</p>
      <div class="flex-between">
        <p>0 <span>left</span></p>
        <button class="btn">Out of stock</button>
      </div>
    </div>
  </section>
</section>
<div>
  <h3>Back this project</h3>
  <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
  <ul>
    <li>
      <input id="first-pledge" type="radio">
      <label for="first-pledge">
        <h4>Pledge with no reward</h4>
        <p>Choose to support us without a reward if you simply believe in our project. As a backer,
          you will be signed up to receive product updates via email.</p>
      </label>
    </li>
    <li>
      <input id="second-pledge" type="radio">
      <label for="second-pledge">
        <div>
          <h4>Bamboo Stand</h4>
          <p>Pledge $25 or more</p>
          <p>101 <span>left</span></p>
        </div>
        <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
          you’ll be added to a special Backer member list.</p>
      </label>
    </li>
    <li>
      <input id="third-pledge" type="radio">
      <label for="third-pledge">
        <div>
          <h4>Black Edition Stand</h4>
          <p>Pledge $75 or more</p>
          <p>64 <span>left</span></p>
        </div>
        <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
          member list. Shipping is included.</p>
        <div class="flex-between">
          <label for="pledge-value">Enter your pledge</label>
          <div>
            <input type="number" id="pledge-value">
            <button class="btn">Continue</button>
          </div>
        </div>
      </label>
    </li>
    <li>
      <input id="fourth-pledge" type="radio">
      <label for="fourth-pledge">
        <div>
          <h4>Mahogany Special Edition</h4>
          <p>Pledge $200 or more</p>
          <p>0 <span>left</span></p>
        </div>
        <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
          to our Backer member list. Shipping is included.</p>
      </label>
    </li>
  </ul>
</div>
<div>
  <h5>Thanks for your support!</h5>
  <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an
    email once our campaign is completed.</p>
  <button class="btn">Got it!</button>
</div>
</main>
`;