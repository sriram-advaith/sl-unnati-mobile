(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-detail-project-detail-module"],{

/***/ "./src/app/project-detail/project-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/project-detail/project-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: ProjectDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailPageModule", function() { return ProjectDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _project_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-detail.page */ "./src/app/project-detail/project-detail.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _project_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailPage"]
    }
];
var ProjectDetailPageModule = /** @class */ (function () {
    function ProjectDetailPageModule() {
    }
    ProjectDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
            ],
            declarations: [_project_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailPage"]]
        })
    ], ProjectDetailPageModule);
    return ProjectDetailPageModule;
}());



/***/ }),

/***/ "./src/app/project-detail/project-detail.page.html":
/*!*********************************************************!*\
  !*** ./src/app/project-detail/project-detail.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=project?.title [showMenu]=\"false\" [showBack]=\"true\" [noBorder]=\"false\" [isGoBack]=\"back\">\n  </app-header>\n</ion-header>\n<ion-content>\n  <!-- <h4 padding style=\"margin:0px;\"> {{project?.title}} </h4> -->\n  <div class=\"project-detail\" *ngIf=\"project\">\n    <div padding>\n      <ion-row *ngIf=\"!editGoal\">\n        <ion-col size=\"5\" class=\"label-box\">\n          {{'projectDetail.goal'|translate}}\n        </ion-col>\n        <ion-col size=\"7\" (click)=\"allowEdit('goal')\">\n          {{project?.goal}}\n        </ion-col>\n      </ion-row>\n      <ion-item class=\"custom-ion-item\" *ngIf=\"editGoal\" (mouseout)=\"blockEdit('goal')\">\n        <ion-label class=\"custom-label\" position=\"floating\"\n          [ngClass]=\"{'required-field':markLabelsAsInvalid && !project.goal}\">\n          {{'create_project.goal' | translate}}</ion-label>\n        <ion-textarea type=\"text\" [(ngModel)]=\"project.goal\" name=\"goal\" (mouseout)=\"blockEdit('goal')\"\n          placeholder=\"{{'create_project.placeholder_goal'| translate}}\" maxlength=\"1000\"></ion-textarea>\n      </ion-item>\n      <ion-row *ngIf=\"project?.duration\">\n        <ion-col size=\"5\" class=\"label-box\">\n          {{'projectDetail.duration' | translate}}\n        </ion-col>\n        <ion-col size=\"7\">\n          {{project?.duration}}\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"project?.startDate\">\n        <ion-col size=\"5\" class=\"label-box\">\n          {{'projectDetail.start_date' | translate}}\n        </ion-col>\n        <ion-col size=\"7\" (click)=\"setDate('sd')\">\n          {{project?.startDate | date : \"dd-MM-yyyy\"}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\" class=\"label-box\">\n          {{'projectDetail.end_date' | translate}}\n        </ion-col>\n        <ion-col size=\"7\" (click)=\"setDate('ed')\">\n          {{project?.endDate | date : \"dd-MM-yyyy\"}}\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"project?.status\">\n        <ion-col size=\"5\" class=\"label-box\">\n          {{'projectDetail.status' | translate}}\n        </ion-col>\n        <ion-col size=\"7\" *ngIf=\"project?.status\">\n          <ion-select [(ngModel)]=\"project.status\" class=\"custom-select\" placeholder=\"Select Status\" [disabled]=\"true\">\n            <ion-select-option  *ngFor=\"let status of statuses\"  value=\"{{status.title}}\"\n              selected=\"status.title === project.status\">{{status.title}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n      <ion-button class=\"round-corner-btn prjdetail-btn\" expand=\"block\" color=\"secondary\"\n        (click)=\"navigateToResources()\" *ngIf=\"category != 'my_projects'\">\n        {{'button.learning_resources' | translate}}\n      </ion-button>\n    </div>\n  </div>\n  <div class=\"tasks-box\">\n    <div *ngIf=\"tasksLength > 0\">\n      <ion-row style=\"padding: 15px;\">\n        <ion-col size=\"6\"> {{'projectDetail.total_task' | translate}} : {{tasksLength}}</ion-col>\n        <ion-col style=\"text-align: right; text-transform: uppercase;\" size=\"6\">\n          {{project.category}}\n        </ion-col>\n      </ion-row>\n      <div *ngFor=\"let task of project.tasks\">\n        <ion-row class=\"task-list\" *ngIf=\"!task.isDelete\">\n          <ion-col size=\"10\" (click)=\"taskView(task)\"> {{task?.title}} </ion-col>\n          <ion-col size=\"2\" style=\"text-align: center; \" *ngIf=\"project?.isStarted\"><img\n              src=\"assets/images/delete.png\" style=\"width: 30px;\" (click)=\"delete(task)\"> </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    <div *ngIf=\"tasksLength == 0 && project?.isStarted\" class=\"tasks-label\">\n      <h5> ADD TASKS TO YOUR PROJECT <ion-icon name=\"add-circle\" color=\"primary\" (click)=\"addTask()\"\n          style=\"font-size:30px;\"></ion-icon>\n      </h5>\n    </div>\n  </div>\n  \n  <ion-button class=\"round-corner-btn prjdetail-btn\" expand=\"block\" color=\"secondary\" (click)=\"copyTemplate()\"\n    *ngIf=\"!project?.isStarted\" style=\"margin-bottom: 50px;\">\n    {{'button.start_project' | translate}}\n  </ion-button>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" style=\"position: fixed;\"\n    *ngIf=\"category == 'my_projects' || category == 'projectsList' && project?.isStarted && tasksLength > 0\">\n    <ion-fab-button (click)=\"addTask()\" style=\" margin-bottom: 15px;\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/project-detail/project-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/project-detail/project-detail.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-detail {\n  background: #f7f7f7;\n  border-bottom: 2px solid #b23d33;\n  font-family: 'SourceSansPro-Bold';\n  font-weight: 600; }\n  .project-detail .label-box {\n    font-family: 'SourceSansPro-Bold';\n    font-weight: 600;\n    text-transform: uppercase; }\n  .project-detail ion-row {\n    padding: 5px 0px; }\n  .tasks-box {\n  background: #fff;\n  font-family: 'SourceSansPro-Bold';\n  font-weight: 600;\n  margin-bottom: 60px;\n  min-height: 250px; }\n  .tasks-box .task-list {\n    border-bottom: 1px solid #b23d33;\n    padding: 5px 15px 5px 15px; }\n  .tasks-box .tasks-label {\n    text-align: center; }\n  .tasks-box .tasks-label ion-icon {\n      font-size: 30px;\n      margin-top: -5px;\n      position: absolute;\n      margin-left: 12px; }\n  .custom-select {\n  border: 1px solid #ccc;\n  padding: 5px;\n  min-width: 70%;\n  max-width: 70%;\n  height: 36px;\n  border-radius: 4px; }\n  .prjdetail-btn {\n  margin-top: 20px;\n  margin-bottom: 0px;\n  font-size: 16px;\n  min-height: 36px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9Vbm5hdGktbW9iaWxlL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9wcm9qZWN0LWRldGFpbC9wcm9qZWN0LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0I7RUFDbEIsZ0NBQStCO0VBQy9CLGlDQUFpQztFQUNqQyxnQkFBZ0IsRUFBQTtFQUpwQjtJQU1RLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIseUJBQXlCLEVBQUE7RUFSakM7SUFZUSxnQkFBZ0IsRUFBQTtFQUd4QjtFQUNJLGdCQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7RUFMckI7SUFPUSxnQ0FBZ0M7SUFDaEMsMEJBQTBCLEVBQUE7RUFSbEM7SUFXUSxrQkFBa0IsRUFBQTtFQVgxQjtNQWFZLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLGlCQUFpQixFQUFBO0VBSTdCO0VBQ0ksc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixjQUFjO0VBQ2QsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0IsRUFBQTtFQUVsQjtFQUNJLGdCQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QtZGV0YWlsL3Byb2plY3QtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWRldGFpbHtcbiAgICBiYWNrZ3JvdW5kOiNmN2Y3Zjc7XG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgI2IyM2QzMztcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZVNhbnNQcm8tQm9sZCc7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAubGFiZWwtYm94e1xuICAgICAgICBmb250LWZhbWlseTogJ1NvdXJjZVNhbnNQcm8tQm9sZCc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICAgIGlvbi1yb3dcbiAgICB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgfVxufVxuLnRhc2tzLWJveHtcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2VTYW5zUHJvLUJvbGQnO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTo2MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICAgIC50YXNrLWxpc3R7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjIzZDMzO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcbiAgICB9XG4gICAgLnRhc2tzLWxhYmVsIHsgICAgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4uY3VzdG9tLXNlbGVjdHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtaW4td2lkdGg6IDcwJTtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgICAucHJqZGV0YWlsLWJ0bntcbiAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7ICAgICBcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAzNnB4O1xuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/project-detail/project-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/project-detail/project-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: ProjectDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailPage", function() { return ProjectDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_project_create_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create-project/create-project.service */ "./src/app/create-project/create-project.service.ts");
/* harmony import */ var _create_task_create_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../create-task/create-task.service */ "./src/app/create-task/create-task.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









var ProjectDetailPage = /** @class */ (function () {
    function ProjectDetailPage(storage, route, createProjectService, router, datePicker, datepipe, taskService) {
        var _this = this;
        this.storage = storage;
        this.route = route;
        this.createProjectService = createProjectService;
        this.router = router;
        this.datePicker = datePicker;
        this.datepipe = datepipe;
        this.taskService = taskService;
        this.tasksLength = 0;
        this.markLabelsAsInvalid = false;
        this.editGoal = false;
        this.editTitle = false;
        this.statuses = [
            { title: 'Not started' },
            { title: 'In Progress' },
            { title: 'Completed' }
        ];
        route.params.subscribe(function (param) {
            if (param.cat) {
                _this.category = param.cat;
                if (_this.category == 'my-projects' || _this.category == 'active-projects' || _this.category == 'all-projects' || _this.category == 'projectsList') {
                    _this.back = 'project-view/projects';
                }
                else if (_this.category == 'schools') {
                    localStorage.setItem('entityKey', _this.project.entityId);
                    _this.back = 'project-view/school-task-report/' + _this.project.entityId + '/school';
                }
                else {
                    _this.back = 'project-view/category/' + _this.category;
                }
            }
        });
    }
    ProjectDetailPage.prototype.ionViewDidEnter = function () {
        this.getProject();
    };
    ProjectDetailPage.prototype.getProject = function () {
        var _this = this;
        this.storage.get('projectToBeView').then(function (project) {
            var completed = 0;
            var notStarted = 0;
            _this.tasksLength = 0;
            var inProgress = 0;
            project.tasks.forEach(function (task) {
                if (!task.isDelete) {
                    _this.tasksLength = _this.tasksLength + 1;
                }
                // set the project status if project is started
                if (project.isStarted) {
                    if (task.status == 'Not started' || task.status == 'not yet started') {
                        notStarted = notStarted + 1;
                    }
                    else if (task.status == 'Completed' || task.status == 'completed') {
                        completed = completed + 1;
                    }
                    else if (task.status == 'In Progress' || task.status == 'in progress') {
                        inProgress = inProgress + 1;
                    }
                    if (project.tasks.length === notStarted) {
                        project.status = 'Not started';
                    }
                    if (project.tasks.length === completed) {
                        project.status = 'Completed';
                    }
                    if (inProgress > 0 || completed != project.tasks.length) {
                        project.status = 'In Progress';
                    }
                }
            });
            if (project.status == 'not yet started') {
                project.status = 'Not started';
            }
            if (project.status == 'not yet started') {
                project.status = 'Not started';
            }
            _this.project = project;
        });
    };
    // Copy the template project into my project
    ProjectDetailPage.prototype.copyTemplate = function () {
        var _this = this;
        this.projectId = '';
        this.project.isStarted = true;
        this.project.status = 'In Progress';
        this.project.startDate = new Date();
        if (this.category != 'my_projects') {
            this.project.createdType = "by reference";
            this.project.isNew = true;
            this.project.templateId = this.project._id;
            if (this.project.tasks) {
                var pId_1 = this.project._id;
                this.project.tasks.forEach(function (task, i) {
                    if (!task._id) {
                        task._id = i + 1;
                        task.isNew = true;
                    }
                    task.projectId = pId_1;
                    task.status = 'Not started';
                    if (task.subTasks) {
                        task.subTasks.forEach(function (subtask) {
                            if (!subtask._id) {
                                subtask.isNew = true;
                                subtask._id = task.subTasks.length + 1;
                                subtask.status = "Not started";
                            }
                        });
                    }
                    else {
                        task.subTasks = [];
                    }
                });
            }
            this.storage.set('projectToBeView', this.project).then(function (project) {
                _this.project = project;
                _this.createProjectService.insertIntoMyProjects(_this.project).then(function (data) {
                    _this.project.isStarted = true;
                    _this.category = 'my_projects';
                });
            });
        }
        else {
            this.createProjectService.updateByProjects(this.project);
            this.storage.set('projectToBeView', this.project).then(function (project) {
                _this.project = project;
            });
        }
    };
    ProjectDetailPage.prototype.navigateToResources = function () {
        this.router.navigate(['/project-view/courses', this.category]);
    };
    ProjectDetailPage.prototype.addTask = function () {
        this.router.navigate(['/project-view/create-task', this.project._id, "pd"]);
    };
    // set date
    ProjectDetailPage.prototype.setDate = function (type) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) {
            if (type == 'sd') {
                _this.project.startDate = _this.datepipe.transform(new Date(date));
                _this.startDate = date;
                if (_this.project.endDate) {
                    _this.checkDate();
                }
            }
            else if (type == "ed") {
                _this.project.endDate = _this.datepipe.transform(new Date(date));
                _this.endDate = date;
                if (_this.project.startDate) {
                    _this.checkDate();
                }
                else {
                    _this.project.startDate = _this.datepipe.transform(new Date());
                }
            }
            _this.createProjectService.updateByProjects(_this.project);
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    // validate date
    ProjectDetailPage.prototype.checkDate = function () {
        this.startDate = this.datepipe.transform(new Date(this.project.startDate));
        this.endDate = this.datepipe.transform(new Date(this.project.endDate));
        if (new Date(this.startDate) <= new Date(this.endDate)) {
            this.isValidDate = true;
            var sDay = new Date(this.startDate).getDate();
            var sMonth = new Date(this.startDate).getMonth();
            var sYear = new Date(this.startDate).getFullYear();
            var eDay = new Date(this.endDate).getDate();
            var eMonth = new Date(this.endDate).getMonth();
            var eYear = new Date(this.endDate).getFullYear();
            var startDate = moment__WEBPACK_IMPORTED_MODULE_6__([sYear, sMonth, sDay]);
            var endDate = moment__WEBPACK_IMPORTED_MODULE_6__([eYear, eMonth, eDay]);
            var diffInMonths = endDate.diff(startDate, 'months');
            var diffInDays = endDate.diff(startDate, 'days');
            var diffInYears = endDate.diff(startDate, 'years');
            if (diffInMonths) {
                this.project.duration = diffInMonths + ' months';
            }
            else if (diffInDays || !diffInDays) {
                this.project.duration = diffInDays + ' days';
            }
            else if (diffInYears) {
                this.project.duration = diffInYears + ' years';
            }
            this.startDate = this.datepipe.transform(new Date(this.project.startDate), "dd-MM-yyyy");
            this.endDate = this.datepipe.transform(new Date(this.project.endDate), "dd-MM-yyyy");
            this.updateTask();
        }
        else {
            this.isValidDate = false;
        }
    };
    // allow user to edit
    ProjectDetailPage.prototype.allowEdit = function (field) {
        switch (field) {
            case 'goal': {
                this.editGoal = true;
                break;
            }
            case 'title': {
                this.editTitle = true;
                break;
            }
        }
    };
    // disable edit option
    ProjectDetailPage.prototype.blockEdit = function (field) {
        switch (field) {
            case 'goal': {
                if (this.project.goal) {
                    this.editGoal = false;
                    this.markLabelsAsInvalid = false;
                }
                else {
                    this.markLabelsAsInvalid = true;
                }
                break;
            }
            case 'title': {
                this.editTitle = false;
                break;
            }
        }
        this.updateTask();
    };
    // update the task
    ProjectDetailPage.prototype.updateTask = function () {
        this.project.lastUpdate = new Date();
        this.createProjectService.updateByProjects(this.project);
    };
    // navigate to view task
    ProjectDetailPage.prototype.taskView = function (task) {
        var _this = this;
        this.storage.set('newcreatedproject', this.project).then(function (cmp) {
            task.projectStarted = _this.project.isStarted;
            _this.storage.set('cTask', task).then(function (ct) {
                _this.router.navigate(['/project-view/current-task', task._id, 'pd']);
            });
        });
    };
    // mark the task as deleted
    ProjectDetailPage.prototype.delete = function (task) {
        var _this = this;
        task.isDelete = true;
        this.storage.set('cTask', task).then(function (ct) {
            _this.updateCurrentProject(ct);
        });
    };
    // update project with all changes made.
    ProjectDetailPage.prototype.updateCurrentProject = function (ct) {
        var _this = this;
        this.createProjectService.UpdateCurrentMyProjectByTask(ct).then(function (currentMyProject) {
            _this.getProject();
        });
    };
    ProjectDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-detail',
            template: __webpack_require__(/*! ./project-detail.page.html */ "./src/app/project-detail/project-detail.page.html"),
            styles: [__webpack_require__(/*! ./project-detail.page.scss */ "./src/app/project-detail/project-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _create_project_create_project_service__WEBPACK_IMPORTED_MODULE_4__["CreateProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["DatePicker"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _create_task_create_task_service__WEBPACK_IMPORTED_MODULE_5__["CreateTaskService"]])
    ], ProjectDetailPage);
    return ProjectDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=project-detail-project-detail-module.js.map