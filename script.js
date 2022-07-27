var $projects = document.querySelector('.projects'),
    $project_elements = $projects.querySelectorAll('.project'),
    project_elements_length = $project_elements.length;

if(project_elements_length > 0){
  
  var i = 0;
  for(i; i < project_elements_length; ++i){
    var $project = $project_elements[i];
    $project.addEventListener('click', function(event){
      event.preventDefault();
      var is_selected = this.classList.contains('selected');
      if(is_selected){
        this.classList.remove('selected');
      }else{
        /*
        var $project_selected = $projects.querySelector('.project.selected');
        if($project_selected){
          $project_selected.classList.remove('selected');
        }
        */
        this.classList.add('selected');
      }
    });
  }
  
}
