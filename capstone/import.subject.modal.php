<div class="modal fade" id="modalForSubjectExcel" tabindex="-1" aria-labelledby="modalExcel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
               <h4>IMPORT SUBJECT(EXCEL FILE)</h4>

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">


            <div class="container">

            <div class="row">

            <div class="col-sm-6">
            <input type="file" name="fileExcel" id="fileExcel" accept=".xls, .xlsx" />
                

            </div>
            <div class="col-sm-6">
            <label for="chooseDeptImport"> Department</label>
                        <select class="form-select" aria-label="Default select example" id="chooseDeptImport" >
                        </select>                 

                        <label for="chooseCourseImport"> Course</label>
                        <select class="form-select" aria-label="Default select example" id="chooseCourseImport">
                        <option selected value="0">Open this select course</option>
                        </select> 

            </div>
            </div>
            </div>

            
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success" id="updateMultiSubject">Update Subject</button>
                <button type="button" class="btn btn-primary" id="addSubject" >Add New Subject</button>
            </div>
        </div>
    </div>
</div>