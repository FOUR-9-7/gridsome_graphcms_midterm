<template>
  <div class="shoppy">
    <br />
    <br />
    <h1 class="text-title">Product</h1>

    <div class="priceRange">
      <h2>
        <b-icon icon="sliders"></b-icon>
        &nbsp;Price range
      </h2>
      
      <div style=" justify-content: space-between;text-align: center">
     

        <b-button id="show-btn" class="filterPrice-btn" @click="select0_30k()">
          <ul class="list-tags">
        <li> 0 - 30,000 Baht</li>
      </ul>
          <b-icon icon="cart"></b-icon>
        </b-button>
        &nbsp;&nbsp;&nbsp;
        <b-button id="show-btn" class="filterPrice-btn" @click="select30k_50k()">
           <ul class="list-tags">
        <li> 30,001 - 50,000 Baht</li>
      </ul>
          <b-icon icon="cart"></b-icon>
        </b-button>
        &nbsp;&nbsp;&nbsp;
        <b-button id="show-btn" class="filterPrice-btn" @click="select50k_70k()">
           <ul class="list-tags">
        <li> 50,001 - 70,000 Baht</li>
      </ul>
          <b-icon icon="cart"></b-icon>
        </b-button>
        &nbsp;&nbsp;&nbsp;
        <b-button id="show-btn" class="filterPrice-btn" @click="select70k_grt()">
           <ul class="list-tags">
        <li>70,000 Baht</li>
      </ul>
          <b-icon icon="cart"></b-icon>
        </b-button>
        &nbsp;&nbsp;&nbsp;
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

    <div v-if="this.$page.pageAll.products" class="product-grid text-center">
      <div
        v-for="(product) in products"
        :key="product.id"
        class="flex-col"
      >
        <g-link :to="'product/' + product.id" class="link" >
        <div class="product-wrapper">
          <g-image v-for="(images, slug) in product.images" class="img" :key="slug" :src="images.url" />   
           <div class="product-content">
          <p class="product-name"> {{ product.name }}</p>
          <p class="product-price">  &#x20A6;{{ product.price * 10 }}</p>
        </div>    
        </div>
       
        </g-link>  
      </div>
    </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      perPage: 3,
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
      products(first: 3,orderBy:price_ASC) {
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
      products(skip: 3, first: 3,orderBy:price_ASC) {
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
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Mukta', sans-serif;
  background-color: #FDFAF6;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  box-shadow: 0 10px 15px #c4dcccff;
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