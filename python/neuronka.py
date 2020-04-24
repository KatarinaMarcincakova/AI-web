# Import používaných modulov
import random, numpy
def inicializuj_hmotnosti():
  # Nastavenie "seedu" pre náhodný generátor
  random.seed(1)

  # Vygenerovanie náhodných počiatočných hmotností
  # (priradenie náhodných čísel z intervalu [-1,1) do matice 3x1)
  hmotnosti = numpy.random.uniform(low=-1, high=1, size=(3, 1))
  return hmotnosti

# Aktivačná funkcia (v tomto prípade ide o sigmoidnu funkciu)
def sigmoid(x):
  return 1 / (1 + numpy.exp(-x))
# Ďalšia pomocná funkcia (derivácia sigmoidnej funkcie)
def derivacia_sigmoid(x):
  return x * (1 - x)
# Funkcia pre výpočet výstupu s pomocou váženého súčtu, predsudku a aktivačnej funkcie
def najdi_vystup(vstupy, hmotnosti, predsudok):
  return sigmoid(numpy.dot(vstupy, hmotnosti) + predsudok)

# Tréning neurónovej siete
def trening(vstupy, ocakavany_vystup, hmotnosti, predsudok, miera_ucenia, pocet_iteracii):
  for iteracia in range(pocet_iteracii):

    # Nájdenie výstupu z tréningových vstupov
    vypocitany_vystup = najdi_vystup(vstupy, hmotnosti, predsudok)

    # Výpočet chyby
    chyba = derivacia_sigmoid(vypocitany_vystup) * (ocakavany_vystup - vypocitany_vystup)

    # Faktory úpravy hmotností a hodnoty predsudku
    faktorH = numpy.dot(vstupy.T, chyba) * miera_ucenia
    faktorP = chyba * miera_ucenia
    # Úprava hmotností a hodnoty predsudku
    hmotnosti += faktorH
    predsudok += faktorP

    # Priebežný výpis postupu
    if ((iteracia % 1000) == 0):
        print("Iterácia", iteracia)
        print("Vypočítaný výsledok: ", vypocitany_vystup.T)
        print("Očakávaný výsledok: ", ocakavany_vystup.T)
        print()

  return hmotnosti

# Náhodné počiatočné hmotnosti pre sieť
hmotnosti = inicializuj_hmotnosti()

# Tréningový set
vstupy = numpy.array([[1, 1, 1],
        [1, 0, 0],
        [0, 0, 1]])

# Cieľový a testovací set
ocakavany_vystup = numpy.array([[1, 0, 1]]).T
test = numpy.array([1, 0, 1])

# Tréning neurónovej siete
naucene_hmotnosti = trening(vstupy, ocakavany_vystup, hmotnosti, predsudok=0.001, miera_ucenia=0.98, pocet_iteracii=100000)

# Otestovanie siete na testovacom sete
presnost = (najdi_vystup(test, naucene_hmotnosti, predsudok=0.01)) * 100
print("Presnosť modelu: ", presnost[0], "%") 