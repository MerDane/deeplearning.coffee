(function(){this.rand=function(){var t;return null===this.RAND_SEED&&(this.RAND_SEED=1234),t=1e6*Math.sin(this.RAND_SEED++),t-Math.floor(t)},this.uniform=function(t,n){return this.rand()*(n-t)+t},this.binomial=function(t,n){var i,r,h,u,o;if(0>n||n>1)return 0;for(i=0,r=h=0,o=t;o>h;r=h+=1)u=this.rand(),n>u&&(i+=1);return i},this.sigmoid=function(t){return 1/(1+Math.pow(Math.E,-t))},this.dsigmoid=function(t){return t*(1-t)},this.tanh=function(t){return Math.tanh(t)},this.dtanh=function(t){return 1-t*t},this.ReLU=function(t){return t>0?t:0},this.dReLU=function(t){return t>0?1:0}}).call(this);