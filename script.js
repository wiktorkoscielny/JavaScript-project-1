document.getElementById('generate_letters').addEventListener('click', generuj);
function wind()
					{
						window.alert('ciag');
					}

function generuj()
{
 
	let ile = document.querySelector('#ile').value;
	let a = document.querySelector('#a').value;
	let b = document.querySelector('#b').value;
	let bufor;
	
	a = parseFloat(a);
    b = parseFloat(b);
    ile = parseInt(ile);

	if(isNaN(a) || isNaN(b) || isNaN(ile) || a >= b || ile < 1)
			{
				document.querySelector('#ciag').innerHTML = '<p>Enter a valid value!</p>';
			}
			else
			{

				let ciag = '<p>Wynik</p>';

				for(i=0; i < ile; i++)
				{

					function getRandomInt(min, max) {
					  min = Math.ceil(a);
					  max = Math.floor(b);
					  return Math.floor(Math.random() * (max - min)) + min;
					}

					let rand = getRandomInt();


					ciag += '<div class="parent" onclick="wind"><span class="resault">' + '<p>' + rand + '<p>' + '</span></div>';


				}
				
				document.querySelector('#ciag').innerHTML = ciag;
			}

			
}


