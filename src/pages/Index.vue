<template>

  <div class="shoppy">
  <div class="topnav" id="myTopnav">
  <a href="#home" class="active"><h1> Sage IT </h1></a>
  <a @click="select0_30k()"><h1> CPU</h1></a>
  <a @click="select50k_70k()"><h1> GPU</h1></a>
  <input type="text" placeholder="Search..">
    <i class="fa fa-bars"></i>
  </a>
</div>


<img src="https://www.img.in.th/images/c325efa1408eaefc961a5b141c131725.png" alt="Paris" class="center">

   
      
      <div style=" justify-content: space-between;text-align: center">
      <div class="pagination">
       <h2>
        <b-icon icon="sliders"></b-icon>
        &nbsp;Pagination
      </h2>
  <a href="#">&laquo;</a>
  <a @click="select0_30k()">1</a>
  <a @click="select30k_50k()">2</a>
  <a @click="select50k_70k()">3</a>
  <a href="#">&raquo;</a>
</div>
 <div class="priceRange">
      <h2>
        <b-icon icon="sliders"></b-icon>
        &nbsp;Price range
      </h2>
      <ul class="list-tags">

        <li @click="select0_30k()" > 0 - 30,000 Baht</li>
        <li @click="select30k_50k()">30,001 - 50,000 Baht</li>
        <li @click="select50k_70k()">50,001 - 70,000 Baht </li>
        <li @click="select70k_grt()">70,000 Baht</li>
      </ul>
      </div>
    </div>
    
    <br />
   <b-pagination
      v-model="currentPage"
      pills
      :total-rows="rows"
      :per-page="perPage"
      align="center"
      @click.native="selectPage(currentPage)"
    ></b-pagination>
    

    <!-- <h1>currentPage: {{ currentPage }}</h1> -->

<div class="pagination">
    <div v-if="this.$page.pageAll.products" class="product-grid text-center">
      <div
        v-for="(product) in products"
        :key="product.id"
        class="flex-col"
      >
       <g-link :to="'product/' + product.id" class="link" >
       <div class="skills">
             <g-image :src="product.images[0].url" class="img" alt="new image" />  

      <h3 class="title">{{ product.name }}</h3>
          <hr class="line">
      <ul class="list-tags">
        <li>RTX 3070</li>
        <li>ASUS</li>
        <li>graphic card </li>
        <li>GPU</li>
        <li>+2</li>
      </ul>
      <i class="fas fa-plus top-icon"></i>
      <div class="list-skills">
        <div class="skill html5"><!-- Skill Html5 -->
          <i class="fab fa-html5 icon"></i>
          <div class="skill-infos">
            <h2>Price</h2>
              <h3 class="name">
          <i class="fa fa-map-marker"></i>
          {{ product.price }} Bath
        </h3>
            <div class="bar">
              <div class="progress"></div>
            </div>
          </div>
        </div>
     
    
      </div>
  
    </div>
    </g-link>  

      
        
      </div>
    </div>
    </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      perPage: 8,
      currentPage: 1,
      cartItems: [],
      x: [],
      lll: 1,
      products: [
        {
          name: "",
          description: "",
          price: "",
          images: [
            {
              url: ""
            }
          ],
          slug: ""
        }
      ]
    }
  },
  computed: {
    rows() {
      return this.$page.pageAll.products.length
    }
  },
  created() {
    this.products = this.$page.page1.products
  },
  methods: {
    addToCart(itemToAdd) {
      this.cartItems = JSON.parse(localStorage.getItem("product"))
      if (this.cartItems == null) {
        this.cartItems = []
      }
      this.cartItems.push(itemToAdd)
      localStorage.setItem("product", JSON.stringify(this.cartItems))
      // console.log(this.products)

      // this.cartItems.push(window.localStorage.getItem("product"))
    },
    selectPage(page) {
      if (page == 1) {
        this.products = this.$page.page1.products
      }
      if (page == 2) {
        this.products = this.$page.page2.products
      }
    },
    select0_30k() {
      this.products = this.$page.select0_30k.products
    },
    select30k_50k() {
      this.products = this.$page.select30k_50k.products
    },
    select50k_70k() {
      this.products = this.$page.select50k_70k.products
    },
    select70k_grt() {
      this.products = this.$page.select70k_grt.products
    }
  }
}
</script>

<page-query>
   query {
    pageAll:gcms {
      products {
        id
        name
        description
        price
        images {
          url
        }
        slug
      }
    }

    page1:gcms {
      products(first: 8,orderBy:price_ASC) {
        id
        name
        description
        price
        images {
          url
        }
        slug
      }
    }

    page2:gcms {
      products(skip: 8, first: 8,orderBy:price_ASC) {
        id
        name
        description
        price
        images {
          url
        }
        slug
      }
    }
    
    select0_30k:gcms {
      products(where: {price_lte: 30000},orderBy:price_ASC) {
        id
        name
        description
        price
        images {
          url
        }
        slug
      }
    }

    select30k_50k:gcms {
      products (where:{ AND: [{ price_gt: 30000 }, { price_lte: 50000 }] },orderBy:price_ASC) {
        id
        name
        description
        price
        images {
          url
        }
        slug
      }
    }

    select50k_70k:gcms {
      products (where:{ AND: [{ price_gt: 50000 }, { price_lte: 70000 }] },orderBy:price_ASC) {
        id
        name
        description
        price
        images {
          url
        }
        slug
      }
    }

    select70k_grt:gcms {
      products (where:{ price_gt: 70000},orderBy:price_ASC) {
        id
        name
        description
        price
        images {
          url
        }
        slug
      }
    }

  }



</page-query>


<style scoped>

.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.pagination a.active {
  background-color: #4CAF50;
  color: white;
}

.pagination a:hover:not(.active) {background-color: #ddd;}
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

body {
  font-family: 'Mukta', sans-serif;
  background-color: #coral;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.topnav {
  overflow: hidden;
  background-color: #333;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}
.topnav input[type=text] {
  float: right;
  padding: 6px;
  margin-top: 8px;
  margin-right: 16px;
  border: none;
  font-size: 17px;
}
@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}

.container {
  width: 90%;
  max-width: 360px;
}
ul {
  list-style: none;
}
/*----------------*/
.infos,
.skills {
  background-color: #FFF;
  padding: 1.3rem;
  position: relative;
  box-shadow: 0 10px 10px #C1CFC0;
  justify-content: space-around;
}
.infos,
.infos img,
.skills {
  border-radius: 1rem;
}
.top-icon {
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #7f7f7f;
  font-size: .9rem;
}
.infos .name,
.infos .location,
.skills .title,
.skill .skill-infos h3 {
  text-transform: uppercase;
}
.infos,
.skill,
.list-tags {
  display: flex;
}
/* Infos */
.infos {
  align-items: center;
  margin-bottom: 1.5rem;
}
.infos img {
  width: 5rem;
  margin-right: 1.3rem;
  box-shadow: 0 0 10px #f0ddd8;
}
.infos .name {
  font-size: 1.2rem;
}
.infos .location {
  font-size: .7rem;
  word-spacing: .2rem;
  font-weight: normal;
}
.infos .location i {
  color: #f2d1e1;
}
/* Skills */
.skills .title {
  margin-bottom: 1rem;
}
.skill {
  align-items: center;
  margin-bottom: .7rem;
}
.skill .icon {
  font-size: 1.5rem;
  transform: translateY(.3rem);
}
.skill.html5 .icon {
  color: #f64019;
}
.skill.css3 .icon {
  color: #0078c3;
}
.skill.js .icon {
  color: #fcdf36;
}
.skill .skill-infos {
  margin-left: .6rem;
  flex-grow: 1;
}
.skill .skill-infos h3 {
  transform: scaleY(.85);
  font-weight: normal;
}
.skill .bar {
  height: .3rem;
  background-color: #e4e9ef;
  border-radius: 5px;
  position: relative;
}
.skill .progress {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #6dd594;
  border-radius: 5px;
  box-shadow: 1px 2px 2px #6dd59455;
}
.skill.html5 .progress {width: 70%;}
.skill.css3 .progress {width: 40%;}
.skill.js .progress {width: 55%;}
.skills .line {
  margin: 2.5rem 0;
  border: none;
  height: 2px;
  background-color: #e9edf2;
}
.list-tags {
  flex-wrap: wrap;
  justify-content: center;
}
.list-tags li {
  cursor: pointer;
  background-color: #e4e9ef;
  padding: .5rem .8rem;
  border-radius: 20px;
  margin: 0 .5rem .5rem 0;
  font-size: .8rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all .2s linear;
  justify-content: center;
}
.list-tags li:hover {
  box-shadow: 1px 1px 3px rgba(0, 0, 0, .2);
}
.divide__between{
  display: flex;
  justify-content: space-between;
}
.button{
    display: flex;
    align-items: center;
    text-decoration: none;
    border: 1px solid #5828e8;
    width: 10rem;
    text-align: center;
    justify-content: center;
    height: 3rem;
    margin-top: .75rem;
    margin-bottom: .75rem;
    border-radius: 5px;
}
.button:hover{
  background: #5828e8;
  color: #f5f5f5;
}
.product-content{
  padding-top: 1.5rem;
  text-align: center;
}
.img{
  width: 300px;
  transition-delay: 500ms;
  object-fit: cover;
}
.product-grid{
  display: flex;
  flex-wrap: wrap;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  justify-content: space-between;
}
.flex-col{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}
.link{
  display: flex;
  width: 100%;
  text-decoration: none;
  height: 100%;
}
.product-wrapper{
  padding: 1.5rem;
  width: 100%;
  border-radius: .5rem;
  position: relative;
  background-color: #f5f5f5;
}
.product-name{
  font-size: 1.125rem;
  color: #101b42;
  font-weight: 700;
  margin-bottom: .5rem;
}
.product-name:hover{
   color: #5828e8;
}
.product-price{
  font-size: .875rem;
  color: #888;
  font-weight: bold;
}
@media(max-width: 760px){
  .product-grid{
    justify-content: center;   
     padding-right: 1rem;
  }
}
</style>