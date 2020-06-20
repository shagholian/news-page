<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Search News Filtering</title>
    <?php $this->loadCSS(); ?>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-info mb-5">
        <a class="navbar-brand" href="http://localhost/javascript/News-api/">Search Top News by Name or Category or
            Country
        </a>
    </nav>
    <div class="container search-wrapper">
        <div id="message"></div>
        <div id="search-news" class="card card-body">
            <h1 class="text-center">Search Top News</h1>

            <div class="form-group">
                <label for="news-name">Search by Name</label>
                <input type="text" id="news-name" class="form-control" placeholder="Search By Name">
            </div>

            <div class="form-group">
                <label for="country">Country</label>
                <select class="form-control" id="country">
                    <option value=''>-- select --</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="gb">United Kingdom</option>
                    <option value="de">Germany</option>
                    <option value="br">Brazil</option>
                    <option value="ar">Argantina</option>
                    <option value="ru">Russia</option>
                    <option value="cn">China</option>
                    <option value="au">Astralia</option>
                </select>

            </div>

            <div class="form-group">
                <label for="category">Category</label>
                <select class="form-control" id="category">
                    <option value=''>-- select --</option>
                    <option value="business">Business</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="health">Health</option>
                    <option value="science">Science</option>
                    <option value="sport">Sport</option>
                    <option value="technology">Technology</option>
                </select>
            </div>

            <div class="form-group">
                <input type="submit" class="mt-5 form-control btn btn-success" id="submitBtn" value="Search">
            </div>

        </div>
        <div class="justify-content-center d-none mt-5" id="spinner">
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>


        <div id="result" class="row mt-5"></div>
        
    </div>

    <footer class="mt-5 p-3 text-center bg-info text-white">
        Search News Filter by Name or Category or Country &copy; MEGAJS
    </footer>

    <?php $this->loadJS();?>


</body>

</html>