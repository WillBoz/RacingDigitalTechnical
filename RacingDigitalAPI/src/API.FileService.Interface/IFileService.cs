namespace API.FileService.Interface
{
    public interface IFileService
    {
        #region public methods
        Task<FileStream> GetResultsFileStream();
        #endregion
    }
}
