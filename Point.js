function Point(x,y){
    if(this==window)return new Point(x,y);
    if(typeof x=='object')
        this.set(x[0]||x.x,x[1]||x.y);
    else if(typeof x=='number')
        this.set(+x,+y);
    this.set(this.x||0,this.y||0);
}
Point.prototype.add=function(a,b){
    a=Point(a,b);
    this.x+=a.x;
    this.y+=a.y;
    return this;
};
Point.prototype.set=function(x,y){
    this.x=x;
    this.y=y;
};
Point.prototype.sub=function(a,b){
    a=Point(a,b);
    this.x-=a.x;
    this.y-=a.y;
    return this;
};
Point.prototype.mult=function(a,b){
    this.x*=a;
    this.y*=a;
    return this;
};
Point.prototype.scale=function(a){
    return Point(this.x*a,this.y*a);
};
Point.prototype.offset=function(a,b){
    return Point(a,b).sub(this);
};
Point.prototype.dist=function(a,b){
    a=this.offset(a,b);
    return Math.sqrt(a.x*a.x+a.y*a.y);
};
