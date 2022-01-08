# PAGE LAYOUTS
- Tables
- Floats e Clear
- Frameworks e Grid System
- Flexbox
- Grid

## posicionamentos

Controlar onde, na página, o elemento irá ficar, alterando o flox normal dos elementos.

- Name: position
- Value: Static|relative|absolute|fixed

```HTML
<div class="box1 box"></div>
<div class="box2 box"></div>
<div class="box3 box"></div>
```

```CSS
.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.box1 {
  background-color: red;
}

.box2 {
  background-color: green;
}

.box3 {
  background-color: blue;
}
```

## relative
- top, right, bottom, left, z-index

```CSS
.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.box1 {
  background-color: red;
  position: relative;
  left: 100px;
  top: 80px;
}

.box2 {
  background-color: green;
}

.box3 {
  background-color: blue;
}
```

## absolute
```CSS
.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.box1 {
  background-color: red;
  position: absolute;
  left: 100px;
  top: 80px;
}

.box2 {
  background-color: green;
}

.box3 {
  background-color: blue;
}
```
## fixed
```CSS
.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.box1 {
  background-color: red;
  position: fixed;
  left: 100px;
  top: 80px;
}

.box2 {
  background-color: green;
}

.box3 {
  background-color: blue;
}
```
## element stacking
```CSS
.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.box1 {
  background-color: red;
  position: absolute;
  left: 5px;
  top: 5px;
  z-index: 3;
}

.box2 {
  background-color: green;
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 2;
}

.box3 {
  background-color: blue;
  position: absolute;
  left: 15px;
  top: 15px;
  z-index: 3;
}
```