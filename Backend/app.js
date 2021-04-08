var createError = require("http-errors");
var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var movieDetailsRouter = require("./routes/movie_details");
var tvDetailsRouter = require("./routes/tv_details");
var searchRouter = require("./routes/search");
var myListRouter = require("./routes/my_list");
var castDetailsRouter = require("./routes/cast");

// const port = process.env.PORT || 3000;
const port = process.env.PORT || 8080;
var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/apis/", indexRouter);
app.use("/apis/users", usersRouter);
app.use("/apis/watch/movie/:movie_id", movieDetailsRouter);
app.use("/apis/watch/tv/:movie_id", tvDetailsRouter);
app.use("/apis/search/:query", searchRouter);
app.use("/apis/mylist", myListRouter);
app.use("/apis/cast/:cast_id", castDetailsRouter);
// redirect all other traffic to homepage
app.use("/apis/*", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

app.listen(port, () => {
  console.log(`Backend app is listening at http://localhost:${port}`);
});

