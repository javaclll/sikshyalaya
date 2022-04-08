part of 'student_dashboard_bloc.dart';

abstract class StudentDashboardEvent extends Equatable {
  @override
  List<Object> get props => [];
}

class GetStudentDash extends StudentDashboardEvent {
  final String url;

  GetStudentDash({required this.url});
  @override
  List<Object> get props => [url];
}
