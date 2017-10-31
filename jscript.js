
            window.onload = load();  

                function load(){
                    const xhr = new XMLHttpRequest();
                    const url ="https://api.trustpilot.com/v1/business-units/51755ae50000640005275317/reviews?apikey=K82ZfWBEyNuR22MPIjeShgKQ5ijpHPaK&perpage=";
                    xhr.onreadystatechange = function(){
                        if(xhr.readystate === XMLHttpRequest.DONE){
                            console.log(xhr.response);
                        }
                    }
                    xhr.open("GET", url+perPage, false);
                    xhr.send();
                    var jsonResponse = JSON.parse(xhr.responseText);
                    for (i = 0; i < jsonResponse.reviews.length; i++) {
                        if(
                           (rating == -1)||(rating == jsonResponse.reviews[i].stars)
                           ){
                            //1. creating all the DOM elements
                            var newArticle = document.createElement('article');
                            newArticle.id = "article" + i;
                            newArticle.className = "article";
                            
                            var newStars = document.createElement('IMG');
                            newStars.id = "stars"+i;
                            newStars.className = "stars";
                            
                            var newName = createElement('p');
                            newName.id = "displayName"+i;
                            newName.className = "name";
                            
                            var newTitle = createElement('p');
                            newTitle.id = "title"+i;
                            newTitle.className = "title";
                            
                            var newText = createElement('p');
                            newText.id = "text"+i;
                            newText.className = "text";
                            
                            var firstDiv = createElement('div');
                            firstDiv.id = "firstDiv"+i;
                            firstDiv.className = "divForStarAndName";
                            
                            var secondDiv = createElement('div');
                            secondDiv.id = "div2"+i;
                            secondDiv.className = "divForTitleAndDate";
                            
                            var newDate = createElement('p');
                            newDate.id = "date"+i;
                            newDate.className = "date";
                            
                            //2. Appending the elements in corrent sequence and position
                            append(newArticle);
                            responseArea.appendChild(newArticle);
                            
                            append(firstDiv);
                            $("article"+i).appendChild(firstDiv);
                            
                            append(newStars);
                            $("firstDiv"+i).appendChild(newStars);
                            
                            append(newName);
                            $("firstDiv"+i).appendChild(newName);
                            
                            append(secondDiv);
                            $("article"+i).appendChild(secondDiv);
                            
                            append(newTitle);
                            $("div2"+i).appendChild(newTitle);
                            
                            document.body.appendChild(newDate);
                            $("div2"+i).appendChild(newDate);
                            
                            append(newText);
                            $("article"+i).appendChild(newText);
                            
                            // 3. Filling the elements with corrent content
                            if( jsonResponse.reviews[i].stars == 0){
                                $("stars"+i).src = "images/0star.png";
                            }
                            if( jsonResponse.reviews[i].stars == 1){
                                $("stars"+i).src = "images/1star.png";
                            }
                            if( jsonResponse.reviews[i].stars == 2){
                                $("stars"+i).src = "images/2stars.png";
                            }
                            if( jsonResponse.reviews[i].stars == 3){
                                $("stars"+i).src = "images/3stars.png";
                            }
                            if( jsonResponse.reviews[i].stars == 4){
                                $("stars"+i).src = "images/4stars.png";
                            }
                            if( jsonResponse.reviews[i].stars == 5){
                                $("stars"+i).src = "images/5stars.png";
                            }
                            
                            var name = jsonResponse.reviews[i].consumer.displayName;
                            var timeWithDate = jsonResponse.reviews[i].createdAt;
                            var year = JSON.stringify(timeWithDate).substring(1,5);
                            var month = JSON.stringify(timeWithDate).substring(6,8);
                            var day = JSON.stringify(timeWithDate).substring(9,11);
                            var date = new Date(year, month, day);

                            var title = jsonResponse.reviews[i].title;
                            var text = jsonResponse.reviews[i].text;
                            
                            $("displayName"+i).innerHTML = name;
                            $("date"+i).innerHTML = date.toDateString().substring(4,15);
                            $("title"+i).innerHTML = title;
                            $("text"+i).innerHTML = text;
                        }
                    }
                };

			function search(sel){
                load;
            };

			function clearAll() {
                var divForResponseArea = document.getElementById('responseArea');
                while(divForResponseArea.firstChild){
                    divForResponseArea.removeChild(divForResponseArea.firstChild);
                };
            };
            
            
            function filterByPage(sel) {
                perPage = sel.value;
                clearAll();
                load();
            };
            
            function filterByRating(sel) {
                rating = sel.value;
                clearAll();
                load();
            };
            
            function search(sel){
                load;
            };
   
