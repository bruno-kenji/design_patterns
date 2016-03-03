$(document).ready(function() {
  var model = {
    students: [],
    days: null,
    addStudent: function(name, daysMissed) {
      var student = {
        name: name,
        daysMissed: daysMissed
      };
      this.students.push(student);
    },
    addDay: function(numOfDays) {
      this.days == null ? this.days = 0 + numOfDays : this.days += numOfDays;
    }
  };

  var octopus = {
    init: function(numOfStudents, numOfDays) {
      var numOfStudents = numOfStudents || 5;
      var numOfDays = numOfDays || 12;

      for (var i = 0; i < numOfStudents; i++) {
        var name = 'Student ' + i;
        var daysMissed = i;

        model.addStudent(name, daysMissed);
      }
      model.addDay(numOfDays);
      view.init();
    },

    getStudents: function() {
      return model.students;
    },

    getDays: function() {
      return model.days;
    }
  };

  var view = {
    init: function() {

      this.createElements();
    },

    createElements: function() {
      var students = octopus.getStudents();
      var days     = octopus.getDays();

      this.$studentRow  = [];
      this.$studentName = [];
      this.$daysMissed  = [];

      this.$day                = [];
      this.$attendance         = [];
      this.$attendanceCheckbox = [];

      for (var i = 1; i < students.length + 1; i++) {
        var student = students[i-1];
        this.$studentRow[i]  = $('<tr>').addClass('student-row').attr('id', 'student-row-' + i.toString());
        this.$studentName[i] = $('<td>').addClass('name-col')   .attr('id', 'name-col-'    + i.toString()).html(student.name);
        this.$daysMissed[i]  = $('<td>').addClass('missed-col') .attr('id', 'missed-col-'  + i.toString()).html(student.daysMissed);

        $('#main-body').append(this.$studentRow[i]);
        this.$studentRow[i].append(this.$studentName[i]);

        for (var j = 1; j < days + 1; j++) {
          this.$attendance[j]         = $('<td>')   .addClass('attend-col')     .attr('id', 'attend-col-'      + j.toString());
          this.$attendanceCheckbox[j] = $('<input>').addClass('attend-checkbox').attr('id', 'attend-checkbox-' + j.toString()).attr('type', 'checkbox');

          this.$studentRow[i]
            .append(this.$attendance[j])
            .append(this.$attendanceCheckbox[j]);
        }

        this.$studentRow[i].append(this.$daysMissed[i]);
      }

      for (var i = 1; i < days + 1; i++) {
        this.$day[i] = $('<th>').addClass('day-col').attr('id', 'day-' + i.toString()).html(i);
        $('#student-name').after(this.$day[i]);
      }
    }
  }

  octopus.init();
})