// Generated by CoffeeScript 1.4.0
(function() {
  var servicios,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __Controller.ServiciorCtrl = (function(_super) {

    __extends(ServiciorCtrl, _super);

    ServiciorCtrl.prototype.elements = {
      "form#servicios": "form"
    };

    ServiciorCtrl.prototype.events = {
      "click a[data-name=guardar]": "onGuardar"
    };

    function ServiciorCtrl() {
      ServiciorCtrl.__super__.constructor.apply(this, arguments);
      __Model.Servicios.bind("create", this.bindCreate);
    }

    ServiciorCtrl.prototype.onGuardar = function(e) {
      e.preventDefault();
      __Model.Servicios.create({
        "id": this.form.find("[name=id]").val(),
        "descripcion": this.form.find("[name=descripcion]").val(),
        "estado": this.form.find("[name=estado]").val()
      });
      this.form.find("[name=id]").val("");
      this.form.find("[name=descripcion]").val("");
      return this.form.find("[name=estado]").val("");
    };

    ServiciorCtrl.prototype.bindCreate = function(item) {
      var view;
      $.ajax({
        success: function(data) {
          return console.log("respuesta", data);
        }
      });
      view = new __View.Servicios(item);
      view.prepend(item);
      return console.log("Han creado un servicio", item);
    };

    return ServiciorCtrl;

  })(Monocle.Controller);

  servicios = new __Controller.ServiciorCtrl("div#cont-servicios");

}).call(this);
