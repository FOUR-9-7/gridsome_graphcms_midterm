<template>
    <Layout>
        <div v-if="this.$page.gcms.product" class="product_layout" >
           
            <div>
            <div class="container">
    <div class="infos">
      <g-image :src="product.images[0].url" class="img" alt="new image" />  
      <div class="">
        <h2 class="name">{{ product.name }}     </h2>
        <h3 class="name">
          <i class="fa fa-map-marker"></i>
          {{ product.price }} Bath
        </h3>
      </div>
      <i class="fas fa-chevron-down top-icon"></i>
    </div>
    <div class="skills">
      <h3 class="title">Description</h3>
      <div class="list-skills">
        <div class="skill html5"><!-- Skill Html5 -->
          <i class="fab fa-html5 icon"></i>
          <div class="skill-infos">
            <h3>Price</h3>
            <div class="bar">
              <div class="progress"></div>
            </div>
          </div>
        </div>
        <div class="skill css3"><!-- Skill Css3 -->
          <i class="fab fa-css3-alt icon"></i>
          <div class="skill-infos">
            <h3>Efficiency</h3>
            <div class="bar">
              <div class="progress"></div>
            </div>
          </div>
        </div>
        <div class="skill js"><!-- Skill JavaScript -->
          <i class="fab fa-js icon"></i>
          <div class="skill-infos">
            <h3>{{ product.description }}</h3>
            <div class="bar">
              <div class="progress"></div>
            </div>
          </div>
        </div>
      </div>
      <hr class="line">
      <ul class="list-tags">
        <li>RTX 3070</li>
        <li>ASUS</li>
        <li>graphic card </li>
        <li>GPU</li>
        <li>+2</li>
      </ul>
      <i class="fas fa-plus top-icon"></i>
    </div>
  </div>

            </div>
            
        </div>
    </Layout>
</template>

<script>
export default {
    data() {
        return {
            product: {
                name: '',
                description:'',
                images: [{
                    url: ''
                }]

            }
        
        }
    },
    created(){
        this.product = this.$page.gcms.product
        console.log('Product here', this.product)
    }
}  
</script>

<page-query>
query GetProduct($id: ID) {
    gcms {
        product(where: {id: $id}) {
                id
            name
            description
            price
            images{
                url
            }
        }
    }
}
</page-query>

<style scoped>
    .img{
        width: 300px;
    }
    .product_layout{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 2rem;
    }


body {
  font-family: 'Mukta', sans-serif;
  background-color: #c4dff6;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  width: 90%;
  max-width: 580px;
}
ul {
  list-style: none;
}

/*----------------*/
.infos,
.skills {
  background-color: #FFF;
  padding: 1.5rem;
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
  width: 15rem;
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


</style>