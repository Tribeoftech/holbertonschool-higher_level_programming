_validator('height', height)
        self.__width = width
        self.__height = height

    def area(self):
        """
        define the area of The rectangle
        """
        return self.__width * self.__height

    def __str__(self):
        """
            Rectangle Descreption
        """
        return("[Rectangle] {}/{}".format(self.__width, self.__height))
