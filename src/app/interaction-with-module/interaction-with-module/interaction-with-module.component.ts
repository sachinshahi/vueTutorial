import {Component, OnInit} from '@angular/core';
import {LayoutModule} from '../../layout/layout.module';
import {Layout} from '../../model/Layout';

@Component({
  selector: 'app-interaction-with-module',
  templateUrl: './interaction-with-module.component.html',
  styleUrls: ['./interaction-with-module.component.css']
})
export class InteractionWithModuleComponent implements OnInit {

  public content = {
    underStandVueJsTemplate: new Layout('', `The {{}} Syntax is also called "interpolation" or "String interpolation"`),
    bindToAttribute: new Layout('Binding to Attributes', `<div id="app">
      <p>{{ title }}</p>
      <p> {{sayHello()}} -
        <a href="{{link}}">Google</a> </p>
    </div>
    new Vue({
      el: '#app',
      data: {
      title: 'Hello World!',
      link: 'http://google.com'
      },
      methods: {
        sayHello: function() {
      return this.title;
      }
      }
    })`),
    underStandingAndUsingDirective: new Layout('Understanding and Using Directives', ``),
    renderingVonce: new Layout('Disable Re-Rendering with v-once', `new Vue({
	el: '#app',
	data: {
		title: 'Hello World!',
		link: 'http://google.com'
	},
	methods: {
		sayHello: function() {
			this.title = 'Hello';
			return this.title;
		}
	}
  })

<div id="app">
	<p>{{ title }}</p>
	<p> {{sayHello()}} - 
	<a v-bind:href="link">Google</a> </p>
</div>

Output
    Hello

    Hello - Google  
    
    
    	<p v-once>{{ title }}</p>
output
	<p v-once>{{ title }}</p>

With v-once dom get rendered only once. It does not render when model changes
`),
    rawHtml: new Layout('Raw Html', `
    data: {
		finishedLink: '<a href="http://google.com">Google </a>'
	}
  
<div id="app">
	<p>{{finishedLink}}</p>
</div>

Output: <a href="http://google.com>Google </a>"
We see link as text. This is a default behaviour. It helps to prevent cross site attacks
If we know this html is safe we might want to output html not just text
<p v-html="finishedLink"></p>

output: Google
`),
    listeningEvent: new Layout('Listening Event', `
   new Vue({
	el: '#app',
	data: {
		counter: 0
	},
	methods: {
		increase: function(){
			this.counter++;
		}
	}
})

<div id="app">
   <button v-on:click="increase">Click me </button>
   <p> {{counter}} </p>
</div>
`),
    passingEvent: new Layout('Passing Event', `
 new Vue({
	el: '#app',
	data: {
		counter: 0,
		x: 0 ,
		y: 0
	},
	methods: {
		increase: function(){
			this.counter++;
		},
		updateCoordinates: function(event){
			this.x = event.clientX;
			this.y = event.clientY;
		}
	}
})


<div id="app">
   <button v-on:click="increase">Click me </button>
   <p> {{counter}} </p>
   <p v-on:mousemove="updateCoordinates">Coordinates: {{x}} / {{y}}</p>
</div>
 `),
    passingOwnArgument: new Layout('Passing your own Arguments with Events',
      `
    <button v-on:click="increase(2)">Click me </button>
    methods: {
		increase: function(step){
			this.counter += step;
		}
		}
		
		$sign event
		<button v-on:click="increase(2, $event)">Click me </button>
		methods: {
		increase: function(step, event){
			this.counter += step;
		}
		}
 `),
    eventModifier: new Layout('Modifying an Event - with Event Modifiers',
      `
      <p v-on:mousemove="updateCoordinates">
   Coordinates: {{x}} / {{y}}
   - <span v-on:mousemove="dummy">DEAD SPOT</span>
   </p>
   
   when we hover on span updateCoordinates get called and coordinates get updated.
   
   methods: {
		dummy: function(event){
			event.stopPropagation();
		}
	}
	
 event.stopPropagation() it prevent events from getting propagated. Noew we hover on span coordiates does not changes
  
  Another solution will be used modifer
  stop => stop propagation
  <p v-on:mousemove="updateCoordinates">
   Coordinates: {{x}} / {{y}}
   - <span v-on:mousemove.stop="">DEAD SPOT</span>
   </p>
   
    we can also chain modifier
    prevent modifier is used to prevent default event   
    <span v-on:mousemove.stop.prevent="">DEAD SPOT</span>
      `),
    keyBoardEvent: new Layout('Listening to Keyboard Events', `
      <input type="text" v-on:keyup="alertMe">
      methods: {
		alertMe: function(){
			alert('Alert!');
		}
	},
	we can also add keymodifier like event modifier with .
	chanining is also possible in modifer.
	   <input type="text" v-on:keyup.enter.space="alertMe">
    Now aler will show when you press enter or space
    https://vuejs.org/v2/guide/events.html#Key-Modifiers
   `),
    javascriptCodeInTemplate: new Layout('Writing JavaScript Code in the Templates', `
    <button v-on:click="increase(2, $event)">Click me </button>
   <button v-on:click="counter++">Click me </button>
   <p> {{counter * 2}} </p>
   <p> {{counter * 2 > 10 ? 'Greater than 10' : 'Smaller than 10'}} </p>
    `),
    twoWayBinding: new Layout('',
      `
      <div id="app">
 <input type="text" v-model="name">
 <p>{{name}}
</div>

new Vue({
	el: '#app',
	data: {
		name: 'max',
	},
	methods: {
	}
}); 
 
 v-model is used for two way binding
`),
    reactingToComputedProperty: new Layout('Reacting to Changes with Computed Properties', `
    <div id="app">
  <button v-on:click="increase">Increase</button>
  <button v-on:click="counter++">Increase1</button>
  <button v-on:click="counter--">Decrease</button>
  <button v-on:click="secondCounter++">Increase SecondCounter</button>
  <p>Couner: {{counter}} </p>
  <p> Result: {{result()}} </p>
</div>


new Vue({
	el: '#app',
	data: {
		counter: 0,
		secondCounter: 0,
		//result: ''
		
	},
	methods: {
		increase: function(){
			this.counter++;
			//this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5'
		},
		result() {
			return this.counter > 5 ? 'Greater 5': 'Smaller than 5';
		}
	}
});

With this approach if we click on Increase SecondCounter result function gets executed.

new Vue({
	el: '#app',
	data: {
		counter: 0,
		secondCounter: 0,
	},
	computed: {
		output: function(){
			return this.counter > 5 ? 'Greater 5': 'Smaller than 5';
		}
	},
	methods: {
		
	}
});
    
  <p> Result: {{result()}} | {{output}} </p>

for computed we used like a property.
For computed of output this function gets executed when counter gets changed
`),
 watchingChanges: new Layout('An Alternative to Computed Properties:Watching for Changes', `
 watch: {
		counter: function(value) {
			var vm = this;
			setTimeout( function(){
				vm.counter = 0;
			}, 2000)
		}
	}
 `),
  shortHands: new Layout('Saving Time with Shorthands', `
  
<div id="app">
 <button v-on:click="changeLink">Click to Change Link</button>
 <button @click="changeLink">Click to Change Link</button>
 <a v-bind:href="link"></a>
 <a :href="link"></a>
</div>

new Vue({
	el: '#app',
	data: {
		link: 'http://google.com'
	},
	methods: {
		changeLink: function() {
			this.link = 'http://apple.com'
		}
	}
});
  `),
    dynamicCss: new Layout('Dynamic Styling with CSS Classes-Basics', `
    <html>
<!-- Put this in the HTML section in JSFiddle! -->
<head>
<script src="https://unpkg.com/vue/dist/vue.js"></script>

</head>
<style type="text/css">
.demo {
	width: 100px;
	height: 100px;
	background-color: grey;
	display: inline-block;
	margin: 10px;
}

.red {
	background-color: red;
}


.blue {
	background-color: blue;
}


.green {
	background-color: green;
}
</style>
<body>
<div id="app">
 <div class="demo" 
 @click="attachedRed = !attachedRed"
 :class="{red: attachedRed}"></div>
 <div class="demo"
 @click="attachedRed = !attachedRed"
 :class="{red: attachedRed}"></div>
 <div class="demo"></div>
</div>
<script src="app.js">
</script>
</body>
</html>


new Vue({
	el: '#app',
	data: {
		attachedRed:false
	},
	methods: {
	}
});
    `),
    dynamicCssWithObject: new Layout('Dynamic Styling with CSS Classes Using Objects', `
    <div class="demo" 
 @click="attachedRed = !attachedRed"
 :class="{red: attachedRed, blue: !attachedRed}"></div>
 <div class="demo"
 @click="attachedRed = !attachedRed"
 :class="divClasses"></div>
 
 
 data: {
		attachedRed:false
	},
	computed: {
	 divClasses: function() {
		 return  {
			red: this.attachedRed,
            blue: !this.attachedRed			
		 };
	 }
	}
    `),
    styleWithCssClassUsingNames: new Layout('Dynamic Styling with CSS Classes Using Names', `
     <div class="demo" :class="color"></div>
 <hr>
 <input type="text" v-model="color">
 
  data: {
		color: 'green'  			
	}
	
	Attached multiple class using array syntax
	 <div class="demo" :class="[color, {red: attachedRed}]"></div>

    `),
    styleDynamicallyWithoutCssClasses: new Layout('', `
    <div id="app">
 <div class="demo" :style="{'background-color': color}"></div> <!--backgroundColor: color-->
 <div class="demo" :style ="myStyle"></div>
 <div class="demo"></div>
 <hr>
 <input type="text" v-model="color">
 <input type ="text" v-model="width">
</div>

new Vue({
	el: '#app',
	data: {
		color: 'gray',
		width: 100
	},
	computed: {
		myStyle: function() {
			return  {
				backgroundColor: this.color,
				width: this.width + 'px'
			}
		}
	},
	methods: {
	}
});

`),
    styleElemntWithArraySyntax: new Layout('', `
     <div class="demo" :style=[myStyle, {height: width + 'px'}]></div>
    `)
  };


  constructor() {
  }

  ngOnInit() {
  }

}
