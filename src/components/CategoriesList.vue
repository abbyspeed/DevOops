<template>
    <div class="category">
      <h3>Category: {{ category }}</h3>
      <div v-for="(result, index) in results" :key="index">
        <div class="result-row">
          <div class="word-bar">{{ result.word }}</div>
          <div class="likes-dislikes">
            <span>{{ result.likes }}</span>
            <button @click="like(index)"><img src="@/assets/like-icon.png" alt="Like"></button>
            <span>{{ result.dislikes }}</span>
            <button @click="dislike(index)"><img src="@/assets/dislike-icon.png" alt="Dislike"></button>
          </div>
        </div>
        <div class="meaning">
          Meaning:
          <p>{{ result.meaning }}</p>
          <hr v-if="index < results.length - 1" />
        </div>
      </div>
      <div class="paging">
        <button @click="changePage(1)" :disabled="currentPage === 1">1</button>
        <button @click="changePage(2)" :disabled="currentPage === 2">2</button>
        <button @click="changePage(3)" :disabled="currentPage === 3">3</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CategoryList',
    props: {
      category: String,
    },
    data() {
      return {
        results: [
          { word: 'IYKYK', likes: 1001, dislikes: 23, meaning: '"IYKYK" stands for "if you know, you know". The abbreviation is used in relation to a statement, image, video or content, alluding to an inside joke or reference for a certain group, such as a fandom.' },
          { word: 'Rizz', likes: 542, dislikes: 50, meaning: '"Rizz" is short for “charisma,” and it simply means an ability to charm and woo a person. It`s pronounced, well, rizz, just like it`s spelled. The term found its way into teen slang through TikTok and other social media.'},
          { word: 'Delulu', likes: 2843, dislikes: 69, meaning: 'The term “delulu” is a slang abbreviation of the word “delusional”. Describe individuals who display odd or extreme behaviour, particularly superfans or dating partners. Delulu also describes someone who holds unrealistic or overly idealistic beliefs or fantasies. It can even refer to those with an unhealthy obsession with a celebrity or crush. ' },
        ],
        currentPage: 1,
      };
    },
    methods: {
      like(index) {
        this.results[index].likes += 1;
      },
      dislike(index) {
        this.results[index].dislikes += 1;
      },
      changePage(page) {
      this.currentPage = page;
      if (page === 2) {
        this.results = [
          { word: 'Yeet', likes: 303, dislikes: 43, meaning: 'A versatile slang term that gained popularity across social media platforms, typically used as an exclamation to express excitement, triumph, or to emphasize the forceful throwing or movement of an object. It has evolved into a multipurpose expression, often employed humorously or playfully in various contexts.' },
          { word: 'Simp', likes: 92, dislikes: 12, meaning: 'A derogatory term that gained prominence in online culture, referring to someone, usually a man, who excessively dotes on or caters to another person, typically a woman, in the hopes of gaining attention or affection. It implies a lack of self-respect or dignity and is often used to criticize perceived subservient behavior in romantic or platonic relationships.' },
          { word: 'GOAT', likes: 584, dislikes: 26, meaning: 'An acronym for "Greatest of All Time," commonly used to denote individuals or entities that are widely regarded as the best or most exceptional in their respective fields. It`s often applied to athletes, musicians, artists, or any figure who has achieved unparalleled success or mastery, emphasizing their enduring impact and influence.' },
        ];
      } else if (page === 3) {
        this.results = [
          { word: 'Lit', likes: 754, dislikes: 35, meaning: 'Commonly used to describe something that is amazing, exciting, or excellent. It can refer to a party that`s a lot of fun or an event that  s particularly enjoyable.' },
          { word: 'Savage', likes: 482, dislikes: 18, meaning: 'Describes someone or something that is fierce, aggressive, or unapologetically authentic. It`s often used to compliment someone for their boldness or assertiveness.' },
          { word: 'FOMO', likes: 621, dislikes: 29, meaning: 'An acronym for "Fear of Missing Out," referring to the anxiety or unease that arises from the belief that others are experiencing enjoyable events or opportunities from which one is absent.' },
        ];
      } else {
        this.results = [
          { word: 'IYKYK', likes: 1001, dislikes: 23, meaning: '"IYKYK" stands for "if you know, you know". The abbreviation is used in relation to a statement, image, video or content, alluding to an inside joke or reference for a certain group, such as a fandom.' },
          { word: 'Rizz', likes: 542, dislikes: 50, meaning: '"Rizz" is short for “charisma,” and it simply means an ability to charm and woo a person. It`s pronounced, well, rizz, just like it`s spelled. The term found its way into teen slang through TikTok and other social media.'},
          { word: 'Delulu', likes: 2843, dislikes: 69, meaning: 'The term “delulu” is a slang abbreviation of the word “delusional”. Describe individuals who display odd or extreme behaviour, particularly superfans or dating partners. Delulu also describes someone who holds unrealistic or overly idealistic beliefs or fantasies. It can even refer to those with an unhealthy obsession with a celebrity or crush. ' },
        ];
      }
    },
    },
  };
  </script>
  
  <style scoped>
  .category {
    background-color: white;
    padding: 50px 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  
  .result-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
  }
  
  .word-bar {
    background-color: orange;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
    color: black;
  }
  
  .likes-dislikes {
    display: flex;
    align-items: center;
  }
  
  .likes-dislikes span {
    margin-right: 0.5rem;
    font-weight: bold;
  }
  
  .likes-dislikes button {
    background-color: white;
    border: none;
    cursor: pointer;
    margin-left: 0.5rem;
  }
  
  .likes-dislikes button img {
    width: 20px;
    height: 20px;
  }
  
  .likes-dislikes button:hover img {
    filter: invert(100%);
  }
  
  .meaning {
    font-weight: bold;
    margin-top: 1rem;
    text-align: left; 
  }
  
  .meaning p {
    margin-top: 0.5rem;
    font-weight: normal;
    text-align: left; 
  }
  
  .paging {
    text-align: center;
    margin-top: 20px;
  }
  
  .paging button {
    margin: 0 5px;
  }
  </style>
  