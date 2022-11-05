<div class="modal fade" id="modalForStudentExcel" tabindex="-1" aria-labelledby="modalExcel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <input type="file" name="fileExcel" id="fileExcel" accept=".xls, .xlsx" />
                <button class="btn btn-secondary" id="convert">Convert</button>

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

                <div class="row" id="newStudentDiv">
                    <h5 class="text-dark mb-2">New Student in the File</h5>
                        <ol class="ms-5" id="listOfNew">
                            
                        </ol>
                </div>
                <hr>
                <div class="row" id="existingStudentDiv">
                <h5 class="text-dark mb-2">Existing Student in the File</h5>

                <ol class="ms-5" id="listOfExisting">

                        </ol>
                </div>


            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success">Update Students</button>
                <button type="button" class="btn btn-primary">Add New Students</button>
            </div>
        </div>
    </div>
</div>